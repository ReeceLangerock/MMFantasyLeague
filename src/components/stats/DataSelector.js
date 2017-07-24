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
    e.target.classList.toggle("btn-primary");
    e.target.classList.toggle("btn-success");

    var seasonButtons = document.getElementsByName("seasonButton");
    var seasonsSelected = [];
    for (let i = 0; i < seasonButtons.length; i++) {
      if (seasonButtons[i].classList.contains("btn-success")) {
        seasonsSelected.push(parseInt(seasonButtons[i].value));
      }
    }

    this.props.updateUserSeasons(seasonsSelected);
    this.props.generateUserStatistics(true, false, seasonsSelected, this.props.users);

    //this.props.updateUserStatistics(e);
  }

  handleUserSelection(e) {
    e.target.classList.toggle("btn-primary");
    e.target.classList.toggle("btn-success");

    var userButtons = document.getElementsByName("userButton");
    var usersSelected = [];
    for (let i = 0; i < userButtons.length; i++) {
      if (userButtons[i].classList.contains("btn-success")) {
        usersSelected.push(userButtons[i].value);
      }
    }
    console.log(usersSelected);

    this.props.updateUserUsers(usersSelected);
    this.props.generateUserStatistics(true, false, this.props.seasons, usersSelected);
  }
  render() {
    return (
      <PanelGroup defaultActiveKey="1" accordion>
        <Panel header="Chart Options" eventKey="1">
          <div className="accordion-button-container">
            <div className="well data-selection-container">
              <h5>Seasons</h5>

              <div className="button-container">
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season4" value="4" onClick={this.handleSeasonSelection}>
                  2016 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season3" value="3" onClick={this.handleSeasonSelection}>
                  2015 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season2" value="2" onClick={this.handleSeasonSelection}>
                  2014 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season1" value="1" onClick={this.handleSeasonSelection}>
                  2013 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season0" value="0" onClick={this.handleSeasonSelection}>
                  2012 Season
                </Button>
              </div>
            </div>
            <div className="well data-selection-container">
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
            <div className="well data-selection-container">
              <h5>Users</h5>

              <div className="button-container">
                <Button bsStyle="success" className="button-child" name="userButton" id="user0" value="Ryan Coxe" onClick={this.handleUserSelection}>
                  GM Coxe
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user1" value="Kevin Dobkin" onClick={this.handleUserSelection}>
                  GM Dobkin
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user2" value="Jason Knaak" onClick={this.handleUserSelection}>
                  GM Knaak
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user3" value="JD Langefeld" onClick={this.handleUserSelection}>
                  GM Langefeld
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user4" value="Reece Langerock" onClick={this.handleUserSelection}>
                  GM Langerock
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user5" value="Jimmy Ouska" onClick={this.handleUserSelection}>
                  GM Ouska
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user6" value="Sean Quill" onClick={this.handleUserSelection}>
                  GM Quill
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user7" value="Matt Rescke" onClick={this.handleUserSelection}>
                  GM Reschke
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user8" value="Bryan Steger" onClick={this.handleUserSelection}>
                  GM Steger
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user9" value="Mike Unverricht" onClick={this.handleUserSelection}>
                  GM Unverricht
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user10" value="Trey Ward" onClick={this.handleUserSelection}>
                  GM Ward
                </Button>
                <Button bsStyle="success" className="button-child" name="userButton" id="user11" value="Alex Warner" onClick={this.handleUserSelection}>
                  GM Warner
                </Button>
              </div>
              <hr />
              <Button bsStyle="primary" className="button-child" name="userButton" id="user11" value="Dave Longwell" onClick={this.handleUserSelection}>
                GM Longwell
              </Button>
            </div>

            <div className="well data-selection-container">
              <h5>Misc</h5>

              <div className="button-container">
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season4" value="4" onClick={this.handleSeasonSelection}>
                  2016 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season3" value="3" onClick={this.handleSeasonSelection}>
                  2015 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season2" value="2" onClick={this.handleSeasonSelection}>
                  2014 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season1" value="1" onClick={this.handleSeasonSelection}>
                  2013 Season
                </Button>
                <Button bsStyle="success" className="button-child" name="seasonButton" id="season0" value="0" onClick={this.handleSeasonSelection}>
                  2012 Season
                </Button>
              </div>
            </div>
          </div>
        </Panel>
      </PanelGroup>
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
