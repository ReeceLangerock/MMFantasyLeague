//EVENTUALLY BREAK THIS OUT TO COMPONENT TO USE WITH BOTH STAT PAGES
import React from "react";
import { generateUserStatistics, isGeneratingLeagueStatistics, updateUserStatistics, updateUserSeasons, updateUserUsers } from "../../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DropdownButton, PageHeader, MenuItem, Button, Accordion, Panel, PanelGroup, Label } from "react-bootstrap";

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatSelection = this.handleStatSelection.bind(this);
    this.handleSeasonSelection = this.handleSeasonSelection.bind(this);
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }
  componentWillMount() {
    this.props.generateUserStatistics(true, false);
  }
  handleStatSelection(e) {
    e.preventDefault();
    this.props.updateUserStatistics(e.target.value);
  }
  handleSeasonSelection(e) {
    // e.target.classList.toggle("btn-primary");
    e.target.classList.toggle("stat-span-active");

    var seasonSpans = document.getElementsByName("seasonSpan");
    var seasonsSelected = [];
    for (let i = 0; i < seasonSpans.length; i++) {
      if (seasonSpans[i].classList.contains("stat-span-active")) {
        seasonsSelected.push(parseInt(seasonSpans[i].value));
      }
    }

    this.props.updateUserSeasons(seasonsSelected);
    this.props.generateUserStatistics(true, false, seasonsSelected, this.props.users);

    //this.props.updateUserStatistics(e);
  }

  handleUserSelection(e) {
    e.target.classList.toggle("stat-span-active");

    var userButtons = document.getElementsByName("userButton");
    var usersSelected = [];
    for (let i = 0; i < userButtons.length; i++) {
      if (userButtons[i].classList.contains("btn-success")) {
        usersSelected.push(userButtons[i].value);
      }
    }

    this.props.updateUserUsers(usersSelected);
    this.props.generateUserStatistics(true, false, this.props.seasons, usersSelected);
  }
  render() {
      return (

              <div className="trophy-button-container">
            <span className = "trophy-button-title">Season</span>
            <div className = "span-col">
            <span className="trophy-button stat-span-active" name = "seasonSpan" id = "season4" data-trophy="4" onClick={this.handleSeasonSelection}>
              2016
            </span>
            <span className="trophy-button  stat-span-active" name = "seasonSpan" id = "season3" data-trophy="3" onClick={this.handleSeasonSelection}>
              2015
            </span>
            </div>
            <span className="trophy-button stat-span-active" name = "seasonSpan" id = "season2" data-trophy="2" onClick={this.handleSeasonSelection}>
              2014
            </span>
            <span className="trophy-button stat-span-active" name = "seasonSpan" id = "season1" data-trophy="1" onClick={this.handleSeasonSelection}>
               2013
            </span>
            <span className="trophy-button stat-span-active" name = "seasonSpan" id = "season0" data-trophy="0" onClick={this.handleSeasonSelection}>
               2012
            </span>
            <hr/>

            <DropdownButton bsStyle="" title={"title"} key={1} id="1">
     <MenuItem eventKey="1">Action</MenuItem>
     <MenuItem eventKey="2">Another action</MenuItem>
     <MenuItem eventKey="3" active>Active Item</MenuItem>
     <MenuItem divider />
     <MenuItem eventKey="4">Separated link</MenuItem>
   </DropdownButton>

            <span className = "trophy-button-title">Users</span>
            <span className="trophy-button stat-span-active" name="userButton" id="user0" value="Ryan Coxe" onClick={this.handleSeasonSelection}>
              Ryan Coxe
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user1" value="Kevin Dobkin" onClick={this.handleSeasonSelection}>
              Kevin Dobkin
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user2" value="Jason Knaak" onClick={this.handleSeasonSelection}>
              Jason Knaak
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user3" value="JD Langefeld" onClick={this.handleSeasonSelection}>
               JD Langefeld
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Reece Langerock" onClick={this.handleSeasonSelection}>
               Reece Langerock
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Jimmy Ouska" onClick={this.handleSeasonSelection}>
               Jimmy Ouska
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Sean Quill" onClick={this.handleSeasonSelection}>
               Sean Quill
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Matt Reschke" onClick={this.handleSeasonSelection}>
               Matt Reschke
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Bryan Steger" onClick={this.handleSeasonSelection}>
              Bryan Steger
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Mike Unverricht" onClick={this.handleSeasonSelection}>
               Mike Unverricht
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Trey Ward" onClick={this.handleSeasonSelection}>
               Trey Ward
            </span>
            <span className="trophy-button stat-span-active" name="userButton" id="user4" value="Alex Warner" onClick={this.handleSeasonSelection}>
               Alex Warner
            </span>
            <span className="trophy-button" name="userButton" id="user4" value="Reece Langerock" onClick={this.handleSeasonSelection}>
               Dave Longwell
            </span>
            <hr/>
            <div className="data-selection-container">
              <h5>Statistics</h5>

              <div className="button-container">
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat0" value="wins" onClick={this.handleStatSelection}>
                  Wins
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat1" value="losses" onClick={this.handleStatSelection}>
                  Losses
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat2" value="win-percentage" onClick={this.handleStatSelection}>
                  Win Percentage
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat3" value="total-points-scored" onClick={this.handleStatSelection}>
                  Point Scored
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat4" value="total-points-allowed" onClick={this.handleStatSelection}>
                  Points Allowed
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat5" value="high-score" onClick={this.handleStatSelection}>
                  High Score
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat6" value="low-score" onClick={this.handleStatSelection}>
                  Low Score
                </Button>
                <Button bsStyle="primary" className="button-child" disabled name="statButton" id="stat7" value="what-if-wins" onClick={this.handleStatSelection}>
                  'What If' Record
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat8" value="earnings" onClick={this.handleStatSelection}>
                  Earnings
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat9" value="average-points-scored" onClick={this.handleStatSelection}>
                  Average Points Scored
                </Button>
                <Button bsStyle="primary" className="button-child" name="statButton" id="stat10" value="average-points-allowed" onClick={this.handleStatSelection}>
                  Average Points Against
                </Button>
              </div>


            </div>


          </div>

    );
  }
}
const mapStateToProps = state => ({
  stats: state.userStatsReducer.statistics,
  seasons: state.userStatsReducer.seasons,
  users: state.userStatsReducer.users,
  renderData: state.userStatsGenerationReducer.data,
  isGenerating: state.seasonStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      generateUserStatistics,
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
