import React from "react";
import { connect } from "react-redux";
import data from "./../../data/data.json";
import userDataHandler from "./../../data/userDataHandler.js";
import * as actions from "./../../actions/actions.js";
import { bindActionCreators } from "redux";
import { DropdownButton, MenuItem, Button, Accordion, Panel, PanelGroup, Label } from "react-bootstrap";
import { generateUserStatistics, isGeneratingLeagueStatistics, updateUserStatistics, updateUserSeasons } from "../../actions/actions";

//import BarChart from './../charts/BarChart.js'

export class UserStats extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatSelection = this.handleStatSelection.bind(this);
    this.handleSeasonSelection = this.handleSeasonSelection.bind(this);
  }
  componentWillMount() {
    this.props.generateUserStatistics(true, false);
  }

  handleStatSelection(e) {
    e.preventDefault();
    console.log(e.target.value);
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
    this.props.generateUserStatistics(true, false, seasonsSelected);

    //this.props.updateUserStatistics(e);
  }

  handleUserSelection(e) {
    document.getElementById(e.id).classList.toggle("selected");
    var userButtons = document.getElementsByName("userButton");
    var selectedUsers = userButtons.map(button => {
      return button.classList.contains("selected");
    });

    this.props.updateSelectedUsers(selectedUsers);
  }

  renderUserNames = () => {
    return data.users.map(user => {
      return <p key={user.name}>{user.name}</p>;
    });
  };

  renderData = () => {
    var statToRender = this.props.stats;
    var d = this.props.renderData;

    if (d.completed) {
      var dataToRender = { data: [] };
      //   if(seasonToRender === 'all') {
      //     for(let i=0; i < d[statToRender].length; i++){
      //       for(let j =0; j < d[statToRender][i].data.length; j++) {
      //     dataToRender.data.push(d[statToRender][i].data[j])
      //   }
      //   }
      // }else {
      //   dataToRender = d[statToRender][seasonToRender]
      // }
      dataToRender.data.sort();
      return Object.keys(d.users.users).map(user => {
        return <h1 key={user}>{user} - {d.users.users[user][statToRender]}</h1>;
      });
    } else {
      return <p>Nothing To REnder</p>;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          <div className="row">
            <div className="col-md-12">
              <h1>
                User Statistics
              </h1>
              <p>
                {this.props.isGenerating}
              </p>
              <h2>Currently viewing {this.props.stats} for all users</h2>
            </div>

          </div>
          <div className="row">
            <div className="col-md-12">
              <Accordion>
                <PanelGroup defaultActiveKey="1">
                  <Panel defaultExpanded={true} header="Chart Options" eventKey="1">
                    <div className="accordion-button-container">

                      <div className="well data-selection-container">
                        <h1>Seasons</h1>

                        <div className="button-container">

                          <Button bsStyle="success" className="button-child" name="seasonButton" id="season4" value="4" onClick={this.handleSeasonSelection}>2016 Season</Button>
                          <Button bsStyle="success" className="button-child" name="seasonButton" id="season3" value="3" onClick={this.handleSeasonSelection}>2015 Season</Button>
                          <Button bsStyle="success" className="button-child" name="seasonButton" id="season2" value="2" onClick={this.handleSeasonSelection}>2014 Season</Button>
                          <Button bsStyle="success" className="button-child" name="seasonButton" id="season1" value="1" onClick={this.handleSeasonSelection}>2013 Season</Button>
                          <Button bsStyle="success" className="button-child" name="seasonButton" id="season0" value="0" onClick={this.handleSeasonSelection}>2012 Season</Button>

                        </div>
                      </div>
                      <div className="well data-selection-container">

                        <h1>Statistics</h1>

                        <div className="button-container">

                          <Button bsStyle="primary" className="button-child" name="statButton" id="seasonAll" value="wins" onClick={this.handleStatSelection}>Wins</Button>
                          <Button bsStyle="primary" className="button-child" name="statButton" id="season4" value="losses" onClick={this.handleStatSelection}>Losses</Button>
                          <Button bsStyle="primary" className="button-child" name="statButton" id="season3" value="total-points-scored" onClick={this.handleStatSelection}>Point Scored</Button>
                          <Button bsStyle="primary" className="button-child" name="statButton" id="season2" value="total-points-allowed" onClick={this.handleStatSelection}>Points Allowed</Button>
                          <Button bsStyle="primary" className="button-child" name="statButton" id="season1" value="high-score" onClick={this.handleStatSelection}>High Score</Button>
                          <Button bsStyle="primary" className="button-child" name="statButton" id="season0" value="low-score" onClick={this.handleStatSelection}>Low Score</Button>
                          <Button bsStyle="primary" className="button-child" disabled name="statButton" id="season0" value="what-if-wins" onClick={this.handleStatSelection}>'What If' Record</Button>
                          <Button bsStyle="primary" className="button-child" name="statButton" id="season0" value="earnings" onClick={this.handleStatSelection}>Earnings</Button>

                        </div>
                      </div>
                      <div className="well data-selection-container">

                        <h1>Users</h1>

                        <div className="button-container">

                          <Button bsStyle="primary" className="button-child" name="userButton" id="0" value="Ryan Coxe">GM Coxe</Button>

                          <Button bsStyle="primary" className="button-child" name="userButton" id="1" value="Kevin Dobkin" onClick={this.handleUserSelection}>GM Dobkin</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="2" value="Jason Knaak" onClick={this.handleUserSelection}>GM Knaak</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="3" value="JD Langefeld" onClick={this.handleUserSelection}>GM Langefeld</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="4" value="Reece Langerock" onClick={this.handleUserSelection}>GM Langerock</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="5" value="Jimmy Ouska" onClick={this.handleUserSelection}>GM Ouska</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="6" value="Sean Quill" onClick={this.handleUserSelection}>GM Quill</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="7" value="Matt Rescke" onClick={this.handleUserSelection}>GM Reschke</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="8" value="Bryan Steger" onClick={this.handleUserSelection}>GM Steger</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="9" value="Mike Unverricht" onClick={this.handleUserSelection}>GM Unverricht</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="10" value="Trey Ward" onClick={this.handleUserSelection}>GM Ward</Button>
                          <Button bsStyle="primary" className="button-child" name="userButton" id="11" value="Alex Warner" onClick={this.handleUserSelection}>GM Warner</Button>

                        </div>
                      </div>

                    </div>
                  </Panel>
                </PanelGroup>
              </Accordion>

            </div>

          </div>
          <hr />
          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2" />
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              {this.renderData()}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2" />

          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.userStatsReducer.statistics,
  renderData: state.userStatsGenerationReducer.data,
  isGenerating: state.seasonStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      generateUserStatistics,
      isGeneratingLeagueStatistics,
      updateUserStatistics,
      updateUserSeasons
    },
    dispatch
  );

var t0 = performance.now();

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
export default connect(mapStateToProps, mapDispatchToProps)(UserStats);
