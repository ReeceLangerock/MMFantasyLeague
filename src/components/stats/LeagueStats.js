import React from "react";
import { connect } from "react-redux";
import data from "./../../data/data.json";
// import dataHandler from "./../../data/dataHandler.js";
import * as actions from "./../../actions/actions.js";
import { bindActionCreators } from "redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import {generateLeagueStatistics, isGeneratingLeagueStatistics, updateLeagueStatistics, updateLeagueSeason} from '../../actions/actions'
import "./../../style/Stats/stats.css";

//import BarChart from './../charts/BarChart.js'

export class LeagueStats extends React.Component {
  constructor(props) {
    super(props);
    this.handleSeasonSelection = this.handleSeasonSelection.bind(this);
      this.handleStatSelection = this.handleStatSelection.bind(this);
  }
  componentWillMount() {
   this.props.generateLeagueStatistics(true, true)
  }
  handleSeasonSelection(e) {
  this.props.updateLeagueSeason(e)
  //this.props.generateLeagueStatistics()

  }

  handleStatSelection(e) {
    this.props.updateLeagueStatistics(e)

  }

  renderUserNames = () => {
    return data.users.map(user => {
      return <p key={user.name}>{user.name}</p>;
    });
  }

  renderData = () => {

    var statToRender = this.props.stats;
    var seasonToRender = this.props.season;
    var d = this.props.renderData;

      if(d.completed){
        var dataToRender ={data: []};
        if(seasonToRender === 'all') {
          for(let i=0; i < d[statToRender].length; i++){
            for(let j =0; j < d[statToRender][i].data.length; j++) {
          dataToRender.data.push(d[statToRender][i].data[j])
        }
        }
      }else {
        dataToRender = d[statToRender][seasonToRender]
      }
    dataToRender.data.sort()
  return  dataToRender.data.map((dataEntry) => {

      return <h1 key = {dataEntry.score}>{dataEntry.user} / {dataEntry.score}{dataEntry.margin}</h1>
    });
    } else {
      return <p>Nothing To REnder</p>

    }

    }

    render() {
      return (
        <div className="container contain-all">
          <div className="row justify-content-center">

            <div className="row">
              <div className="col-md-12">
                <h1>
                  League Statistics
                </h1>
                <p>
                {this.props.isGenerating}
                </p>
                <h2>Currently viewing {this.props.stats} from the {this.props.season}</h2>
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <DropdownButton id = '1' title="Season" bsStyle="default">
                  <MenuItem eventKey="all" onSelect={this.handleSeasonSelection}>All Time</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4" onSelect={this.handleSeasonSelection}>2016 Season</MenuItem>
                  <MenuItem eventKey="3" onSelect={this.handleSeasonSelection}>2015 Season</MenuItem>
                  <MenuItem eventKey="2" onSelect={this.handleSeasonSelection}>2014 Season</MenuItem>
                  <MenuItem eventKey="1" onSelect={this.handleSeasonSelection}>2013 Season</MenuItem>
                  <MenuItem eventKey="0" onSelect={this.handleSeasonSelection}>2012 Season</MenuItem>
                </DropdownButton>
                <DropdownButton id = '2'  title="Statistic" bsStyle="default">
                  <MenuItem eventKey="highestScore" onSelect={this.handleStatSelection}>Highest Points</MenuItem>
                  <MenuItem eventKey="lowestScore" onSelect={this.handleStatSelection}>Lowest Points</MenuItem>
                  <MenuItem eventKey="largestMargin" onSelect={this.handleStatSelection}>Largest Margins</MenuItem>
                  <MenuItem eventKey="smallestMargin" onSelect={this.handleStatSelection}>Smallest Margins</MenuItem>
                  <MenuItem eventKey="worstWins" onSelect={this.handleStatSelection}>Worst Wins</MenuItem>
                  <MenuItem eventKey="bestLosses" onSelect={this.handleStatSelection}>Best Losses</MenuItem>
                </DropdownButton>
              </div>

            </div>
            <hr />
            <div className="row">

              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                {this.renderUserNames()}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                {this.renderData()}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                {this.renderUserNames()}
              </div>

            </div>
          </div>

        </div>
      );
    }
  }


  const mapStateToProps = state => ({
    season: state.seasonStatsReducer.season,
    stats: state.seasonStatsReducer.statistics,
    renderData: state.seasonStatsGenerationReducer.data,
    isGenerating: state.seasonStatsGenerationReducer.isGenerating
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    generateLeagueStatistics, isGeneratingLeagueStatistics, updateLeagueSeason, updateLeagueStatistics
  }, dispatch)

  var t0 = performance.now();
  //dataHandler.run();
  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
  export default connect(mapStateToProps, mapDispatchToProps)(LeagueStats);
