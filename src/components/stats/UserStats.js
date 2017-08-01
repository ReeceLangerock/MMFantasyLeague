import React from "react";
import { connect } from "react-redux";
import data from "./../../data/data.json";
import userDataHandler from "./../../data/userDataHandler.js";
import * as actions from "./../../actions/actions.js";
import { bindActionCreators } from "redux";
import DataSelector from "./DataSelector.js";
import { generateUserStatistics, isGeneratingLeagueStatistics, updateUserStatistics, updateUserSeasons, updateUserUsers } from "../../actions/actions";
import "./../../style/Stats/stats.css";

import BarChart from "./../charts/BarChart.js";

export class UserStats extends React.Component {
  renderData = () => {
    var statToRender = this.props.stats;
    var d = this.props.renderData;

    if (d.completed) {
      var dataToRender = { data: [] };

      dataToRender.data.sort();
      return Object.keys(d.users.users).map(user => {
        if (this.props.users.includes(user)) {
          return (
            <h1 key={user}>
              {user} - {d.users.users[user][statToRender]}
            </h1>
          );
        }
      });
    } else {
      return <p>Nothing To Render</p>;
    }
  };

  render() {
    // {this.renderData()}
    return (
      <div className="container-fluid">
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="stats-container">

                <DataSelector dataSelectorToRender="user" />

                <div className="chart-section-container">
                  <span className="trophy-title">Trophy Room</span>
                  <div className="chart-container">

                    <BarChart dataToDisplay ="user"/>

                  </div>
                </div>
              </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserStats);
