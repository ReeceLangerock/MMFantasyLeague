//EVENTUALLY BREAK THIS OUT TO COMPONENT TO USE WITH BOTH STAT PAGES
import React from "react";
import {
  generateUserStatistics,
  generateLeagueStatistics,
  isGeneratingLeagueStatistics,
  updateUserStatistics,
  updateUserSeasons,
  updateLeagueStatistics,
  updateLeagueSeason,
  updateUserUsers,
  setRegularOrPlayoffsSelected
} from "../../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import lists from "./../../data/lists.js";

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatSelection = this.handleStatSelection.bind(this);
    this.handleSeasonSelection = this.handleSeasonSelection.bind(this);
    this.handleUserSelection = this.handleUserSelection.bind(this);
    this.handleRegOrPlayoff = this.handleRegOrPlayoff.bind(this);
  }

  componentWillMount() {
    //GENERATE THE DATA NEEDED FOR THE CHART
    if (this.props.dataSelectorToRender === "user") {
      this.props.generateUserStatistics(this.props.regularOrPlayoffsSelected[0], this.props.regularOrPlayoffsSelected[1], this.props.userDataSeasonsSelected, this.props.userDataUsersSelected);
    } else {
      this.props.generateLeagueStatistics(this.props.regularOrPlayoffsSelected[0], this.props.regularOrPlayoffsSelected[1], this.props.leagueDataSeasonSelected);
    }
  }

  handleRegOrPlayoff(e) {
    e.target.classList.toggle("stat-span-active");
    var regSelected = document.getElementById("regular").classList.contains("stat-span-active");
    var playoffsSelected = document.getElementById("playoffs").classList.contains("stat-span-active");
    this.props.setRegularOrPlayoffsSelected([regSelected, playoffsSelected]);
    // GENERATE NEW STATISTICS REFLECTING CHOSEN REGULAR SEASON / PLAYOFF STATUS
    if (this.props.dataSelectorToRender === "user") {
      this.props.generateUserStatistics(regSelected, playoffsSelected, this.props.userDataSeasonsSelected, this.props.userDataUsersSelected);
    } else {
      this.props.generateLeagueStatistics(regSelected, playoffsSelected, this.props.leagueDataSeasonSelected);
    }
  }
  handleStatSelection(e) {
    var statSpans = document.getElementsByName("statSpan");
    for (let i = 0; i < statSpans.length; i++) {
      statSpans[i].classList.remove("stat-span-active");
    }
    let stat = e.target.getAttribute("data-stat");
    e.target.classList.toggle("stat-span-active");

    // UPDATE STORE WITH NEWLY CHOSEN STATISTIC
    if (this.props.dataSelectorToRender === "user") {
      this.props.updateUserStatistics(stat);
    } else {
      this.props.updateLeagueStatistics(stat);
    }
  }

  handleSeasonSelection(e) {
    var seasonSpans = document.getElementsByName("seasonSpan");
    if (this.props.dataSelectorToRender === "league") {
      for (let i = 0; i < seasonSpans.length; i++) {
        seasonSpans[i].classList.remove("stat-span-active");
      }
      var seasonSelected = e.target.getAttribute("data-season");
    }
    e.target.classList.toggle("stat-span-active");

    var seasonsSelected = [];
    for (let i = 0; i < seasonSpans.length; i++) {
      if (seasonSpans[i].classList.contains("stat-span-active")) {
        seasonsSelected.push(parseInt(seasonSpans[i].getAttribute("data-season"), 10));
      }
    }
    // UPDATE STORE WITH SEASONS SELECTED, AND REGENERATE STATISTICS
    if (this.props.dataSelectorToRender === "user") {
      this.props.updateUserSeasons(seasonsSelected);
      this.props.generateUserStatistics(this.props.regularOrPlayoffsSelected[0], this.props.regularOrPlayoffsSelected[1], seasonsSelected, this.props.userDataUsersSelected);
    } else {
      this.props.updateLeagueSeason(seasonSelected);
      this.props.generateLeagueStatistics(this.props.regularOrPlayoffsSelected[0], this.props.regularOrPlayoffsSelected[1], seasonSelected);
    }
  }

  handleUserSelection(e) {
    e.target.classList.toggle("stat-span-active");

    var userButtons = document.getElementsByName("userSpan");
    var usersSelected = [];
    for (let i = 0; i < userButtons.length; i++) {
      if (userButtons[i].classList.contains("stat-span-active")) {
        usersSelected.push(userButtons[i].getAttribute("data-user"));
      }
    }

    // UPDATE STORE WITH SEASONS SELECTED, AND REGENERATE STATISTICS
    this.props.updateUserUsers(usersSelected);
    if (this.props.dataSelectorToRender === "user") {
      this.props.generateUserStatistics(this.props.regularOrPlayoffsSelected[0], this.props.regularOrPlayoffsSelected[1], this.props.userDataSeasonsSelected, usersSelected);
    } else {
      this.props.generateLeagueStatistics(this.props.regularOrPlayoffsSelected[0], this.props.regularOrPlayoffsSelected[1], this.props.leagueDataSeasonSelected);
    }
  }

  // RENDER USER 'BUTTONS' FOR ACTIVE USERS
  renderActiveUserSpans() {
    const users = lists.getUserList();
    let activeUsers = [];
    //filter out legacy members
    for (let i = 0; i < users.length; i++) {
      if (users[i].active) {
        activeUsers.push(users[i]);
      }
    }

    var twoUsers = [];
    for (let i = 0; i < activeUsers.length; i = i + 2) {
      if (activeUsers[i + 1]) {
        twoUsers.push([activeUsers[i], activeUsers[i + 1]]);
      } else {
        twoUsers.push([activeUsers[i]]);
      }
    }
    return twoUsers.map((user, index) => {
      var userKey = `user${index}`;

      if (user.length === 2) {
        return (
          <div key={userKey} className="span-col">

            <span className="stat-span stat-span-active" name="userSpan" id={user[0].name} data-user={user[0].name} onClick={this.handleUserSelection}>
              {user[0].name}
            </span>

            <span className="stat-span stat-span-active" name="userSpan" id={user[1].name} data-user={user[1].name} onClick={this.handleUserSelection}>
              {user[1].name}
            </span>
          </div>
        );
      } else {
        return (
          <div key={userKey} className="span-col">

            <span className="stat-span stat-span-active" name="userSpan" id={user[0].name} data-user={user[0].name} onClick={this.handleUserSelection}>
              {user[0].name}
            </span>
          </div>
        );
      }
    });
  }

  // RENDER USER 'BUTTONS' FOR LEGACY USERS
  renderLegacyUserSpans() {
    const users = lists.getUserList();
    let legacyUsers = [];
    //filter out active members
    for (let i = 0; i < users.length; i++) {
      if (!users[i].active) {
        legacyUsers.push(users[i]);
      }
    }
    var twoUsers = [];
    for (let i = 0; i < legacyUsers.length; i = i + 2) {
      if (legacyUsers[i + 1]) {
        twoUsers.push([legacyUsers[i], legacyUsers[i + 1]]);
      } else {
        twoUsers.push([legacyUsers[i]]);
      }
    }
    return twoUsers.map((user, index) => {
      var userKey = `user${index}`;

      if (user.length === 2) {
        return (
          <div key={userKey} className="span-col">

            <span className="stat-span" name="userSpan" id={user[0].name} data-user={user[0].name} onClick={this.handleUserSelection}>
              {user[0].name}
            </span>

            <span className="stat-span" name="userSpan" id={user[1].name} data-user={user[1].name} onClick={this.handleUserSelection}>
              {user[1].name}
            </span>
          </div>
        );
      } else {
        return (
          <div key={userKey} className="span-col">

            <span className="stat-span" name="userSpan" id={user[0].name} data-user={user[0].name} onClick={this.handleUserSelection}>
              {user[0].name}
            </span>
          </div>
        );
      }
    });
  }

  //RENDER STATISTICS 'BUTTONS'
  renderStatisticsSpans() {
    let stats;
    var defaultStat;
    if (this.props.dataSelectorToRender === "user") {
      stats = lists.getUserStatList();
      defaultStat = this.props.userDataStatSelected;
    } else {
      stats = lists.getLeagueStatList();
      defaultStat = this.props.leagueDataStatSelected;
    }
    var twoStats = [];
    for (let i = 0; i < stats.length; i = i + 2) {
      if (stats[i + 1]) {
        twoStats.push([stats[i], stats[i + 1]]);
      } else {
        twoStats.push([stats[i]]);
      }
    }
    return twoStats.map((stat, index) => {
      var statKey = `stat${index}`;

      let style0 = stat[0].name === defaultStat ? "stat-span stat-span-active" : "stat-span";

      if (stat.length === 2) {
        let style1 = stat[1].name === defaultStat ? "stat-span stat-span-active" : "stat-span";

        return (
          <div key={statKey} className="span-col">

            <span className={style0} name="statSpan" id={stat[0].name} data-stat={stat[0].name} onClick={this.handleStatSelection}>
              {stat[0].formattedName}
            </span>

            <span className={style1} name="statSpan" id={stat[1].name} data-stat={stat[1].name} onClick={this.handleStatSelection}>
              {stat[1].formattedName}
            </span>
          </div>
        );
      } else {
        return (
          <div key={statKey} className="span-col">

            <span className={style0} name="statSpan" id={stat[0].name} data-stat={stat[0].name} onClick={this.handleStatSelection}>
              {stat[0].formattedName}
            </span>
          </div>
        );
      }
    });
  }

  //RENDER SEASON 'BUTTONS'
  renderSeasonSpans() {
    let seasons = lists.getSeasons();

    var twoSeasons = [];
    for (let i = 0; i < seasons.length; i = i + 2) {
      if (seasons[i + 1]) {
        twoSeasons.push([seasons[i], seasons[i + 1]]);
      } else {
        twoSeasons.push([seasons[i]]);
      }
    }
    return twoSeasons.map((season, index) => {
      var seasonKey = `season${index}`;
      var style0, style1 = "";
      if (index === 0 && this.props.dataSelectorToRender === "league") {
        style0 = "stat-span stat-span-active";
        style1 = "stat-span";
      } else if (index !== 0 && this.props.dataSelectorToRender === "league") {
        style0 = "stat-span";
        style1 = "stat-span";
      } else {
        style0 = "stat-span stat-span-active";
        style1 = "stat-span stat-span-active";
      }

      if (season.length === 2) {
        return (
          <div key={seasonKey} className="span-col">

            <span className={style0} name="seasonSpan" id={season[0].id} data-season={season[0].id} onClick={this.handleSeasonSelection}>
              {season[0].season}
            </span>

            <span className={style1} name="seasonSpan" id={season[1].id} data-season={season[1].id} onClick={this.handleSeasonSelection}>
              {season[1].season}
            </span>
          </div>
        );
      } else {
        return (
          <div key={seasonKey} className="span-col">

            <span className={style0} name="seasonSpan" id={season[0].id} data-season={season[0].id} onClick={this.handleSeasonSelection}>
              {season[0].season}
            </span>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="stat-selection-container">
        <div className="data-selection-container">
          <h5>Season</h5>

          {this.renderSeasonSpans()}
          <hr />

        </div>


        <div className="data-selection-container">
          <h5>Regular and/or Playoffs</h5>

          <div className="span-col">

            <span className="stat-span stat-span-active" name="playoffRegular" id="regular" data-pr="regular" onClick={this.handleRegOrPlayoff}>
              Regular Season
            </span>
            <span className="stat-span" name="playoffRegular" id="playoffs" data-pr="playoffs" onClick={this.handleRegOrPlayoff}>
              Playoffs
            </span>
          </div>
          <hr />
        </div>

        {this.props.dataSelectorToRender === "user" &&
          <div className="data-selection-container">
            <h5>Users</h5>
            {this.renderActiveUserSpans()}
            <hr />
            {this.renderLegacyUserSpans()}
            <hr />
          </div>}

        <div className="data-selection-container">
          <h5>Statistics</h5>
          {this.renderStatisticsSpans()}

        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  userDataStatSelected: state.dataSelectionReducer.userDataStatSelected,
  leagueDataStatSelected: state.dataSelectionReducer.leagueDataStatSelected,
  userDataSeasonsSelected: state.dataSelectionReducer.userDataSeasonsSelected,
  userDataUsersSelected: state.dataSelectionReducer.userDataUsersSelected,
  regularOrPlayoffsSelected: state.dataSelectionReducer.regularOrPlayoffsSelected,
  isGenerating: state.seasonStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      generateUserStatistics,
      generateLeagueStatistics,
      isGeneratingLeagueStatistics,
      updateUserStatistics,
      updateUserSeasons,
      updateUserUsers,
      updateLeagueStatistics,
      updateLeagueSeason,
      setRegularOrPlayoffsSelected
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DataSelector);
