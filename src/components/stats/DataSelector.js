"use strict";
//EVENTUALLY BREAK THIS OUT TO COMPONENT TO USE WITH BOTH STAT PAGES
import React from "react";
import { generateUserStatistics, generateLeagueStatistics, isGeneratingLeagueStatistics, updateUserStatistics, updateUserSeasons, updateUserUsers } from "../../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DropdownButton, PageHeader, MenuItem, Button, Accordion, Panel, PanelGroup, Label } from "react-bootstrap";
import lists from "./../../data/lists.js";

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatSelection = this.handleStatSelection.bind(this);
    this.handleSeasonSelection = this.handleSeasonSelection.bind(this);
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }
  componentWillMount() {
    if (this.props.dataSelectorToRender === "user") {
      this.props.generateUserStatistics(true, false);
    } else {
      this.props.generateLeagueStatistics(true, false);
    }
  }
  handleStatSelection(e) {
    e.preventDefault();
    var statSpans = document.getElementsByName("statSpan");
    for (let i = 0; i < statSpans.length; i++) {
      statSpans[i].classList.remove("stat-span-active");
    }
    let stat = e.target.getAttribute("data-stat");
    e.target.classList.toggle("stat-span-active");

    this.props.updateUserStatistics(stat);
  }
  handleSeasonSelection(e) {
    e.target.classList.toggle("stat-span-active");

    var seasonSpans = document.getElementsByName("seasonSpan");
    var seasonsSelected = [];
    for (let i = 0; i < seasonSpans.length; i++) {
      if (seasonSpans[i].classList.contains("stat-span-active")) {
        seasonsSelected.push(parseInt(seasonSpans[i].getAttribute("data-season")));
      }
    }

    this.props.updateUserSeasons(seasonsSelected);
    this.props.generateUserStatistics(true, false, seasonsSelected, this.props.users);
  }

  handleUserSelection(e) {
    e.target.classList.toggle("stat-span-active");

    var userButtons = document.getElementsByName("userButton");
    var usersSelected = [];
    for (let i = 0; i < userButtons.length; i++) {
      if (userButtons[i].classList.contains("btn-success")) {
        usersSelected.push(userButtons[i].getAttribute("data-user"));
      }
    }

    this.props.updateUserUsers(usersSelected);
    this.props.generateUserStatistics(true, false, this.props.seasons, usersSelected);
  }

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

  renderStatisticsSpans() {
    let stats;
    var defaultStat;
    if (this.props.dataSelectorToRender === "user") {
      stats = lists.getUserStatList();
      defaultStat = this.props.selectedUserStat;
    } else {
      stats = lists.getLeagueStatList();
      defaultStat = this.props.selectedLeagueStat;

    }
    console.log(defaultStat);
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


      let style0 = (stat[0].name === defaultStat) ? "stat-span stat-span-active" : "stat-span";

      if (stat.length === 2) {
        let style1 = (stat[1].name === defaultStat) ? "stat-span stat-span-active" : "stat-span";

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

  render() {
    return (
      <div className="stat-selection-container">
        <span className="trophy-button-title">Season</span>
        <div className="span-col">
          <span className="stat-span stat-span-active" name="seasonSpan" id="season4" data-season="4" onClick={this.handleSeasonSelection}>
            2016
          </span>
          <span className="stat-span  stat-span-active" name="seasonSpan" id="season3" data-season="3" onClick={this.handleSeasonSelection}>
            2015
          </span>
        </div>
        <div className="span-col">

          <span className="stat-span stat-span-active" name="seasonSpan" id="season2" data-season="2" onClick={this.handleSeasonSelection}>
            2014
          </span>
          <span className="stat-span stat-span-active" name="seasonSpan" id="season1" data-season="1" onClick={this.handleSeasonSelection}>
            2013
          </span>
        </div>
        <div className="span-col">

          <span className="stat-span stat-span-active" name="seasonSpan" id="season0" data-season="0" onClick={this.handleSeasonSelection}>
            2012
          </span>
        </div>
        <hr />
        <span className="trophy-button-title">Regular and/or Playoffs</span>

        <div className="span-col">

          <span className="stat-span stat-span-active" name="playoffRegular" id="regular" data-pr="regular" onClick="">
            Regular Season
          </span>
          <span className="stat-span" name="playoffRegular" id="playoffs" data-pr="playoffs" onClick="">
            Playoffs
          </span>
        </div>

        <hr />
        {this.props.dataSelectorToRender === "user" &&
          <div className="data-selection-container">
            <h5>Users</h5>
            {this.renderActiveUserSpans()}
            <hr />
            {this.renderLegacyUserSpans()}
          </div>}
        <hr />

        <div className="data-selection-container">
          <h5>Statistics</h5>
          {this.renderStatisticsSpans()}

        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  selectedUserStat: state.userStatsReducer.statistics,
  selectedLeagueStat: state.seasonStatsReducer.statistics,
  seasons: state.userStatsReducer.seasons,
  users: state.userStatsReducer.users,
  renderData: state.userStatsGenerationReducer.data,
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
      updateUserUsers
    },
    dispatch
  );

var t0 = performance.now();

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
export default connect(mapStateToProps, mapDispatchToProps)(DataSelector);
