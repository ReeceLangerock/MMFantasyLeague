import React from "react";
import * as Redux from "react-redux";
import data from "./../../data/data.json";
import dataHandler from "./../../data/dataHandler.js";
import * as actions from "./../../actions/actions.js";
import { DropdownButton, MenuItem } from "react-bootstrap";
//import BarChart from './../charts/BarChart.js'

export class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.handleSeasonSelection = this.handleSeasonSelection.bind(this);
      this.handleStatSelection = this.handleStatSelection.bind(this);
  }
  handleSeasonSelection(e) {
    var {dispatch} = this.props;
    dispatch(actions.updateLeagueSeason(e))

  }

  handleStatSelection(e) {
    var {dispatch} = this.props;
    dispatch(actions.updateLeagueStatistics(e))

  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          <div className="row">
            <div className="col-md-12">
              <h1>
                Stats
              </h1>
            </div>

          </div>
          <div className="row">
            <div className="col-md-12">
              <DropdownButton title="Season" bsStyle="default">
                <MenuItem eventKey="All" onSelect={this.handleSeasonSelection}>All Time</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2016" onSelect={this.handleSeasonSelection}>2016 Season</MenuItem>
                <MenuItem eventKey="2015" onSelect={this.handleSeasonSelection}>2015 Season</MenuItem>
                <MenuItem eventKey="2014" onSelect={this.handleSeasonSelection}>2014 Season</MenuItem>
                <MenuItem eventKey="2013" onSelect={this.handleSeasonSelection}>2013 Season</MenuItem>
                <MenuItem eventKey="2012" onSelect={this.handleSeasonSelection}>2012 Season</MenuItem>
              </DropdownButton>
              <DropdownButton title="Statistic" bsStyle="default">
                <MenuItem eventKey="Highest Points" onSelect={this.handleStatSelection}>Highest Points</MenuItem>
                <MenuItem eventKey="Lowest Points" onSelect={this.handleStatSelection}>Lowest Points</MenuItem>
                <MenuItem eventKey="Largest Margins" onSelect={this.handleStatSelection}>Largest Margins</MenuItem>
                <MenuItem eventKey="Smallest Margins" onSelect={this.handleStatSelection}>Smallest Margins</MenuItem>
                <MenuItem eventKey="Worst Wins" onSelect={this.handleStatSelection}>Worst Wins</MenuItem>
                <MenuItem eventKey="Best Losses" onSelect={this.handleStatSelection}>Best Losses</MenuItem>
              </DropdownButton>
            </div>

          </div>
          <hr />
          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
              {renderUserNames()}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              Variable width content
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
              {renderUserNames()}
            </div>

          </div>
        </div>

      </div>
    );
  }
}
var renderUserNames = () => {
  return data.users.map(user => {
    return <p key={user.name}>{user.name}</p>;
  });
};
var t0 = performance.now();
dataHandler.run(data);
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
export default Redux.connect()(Stats);
