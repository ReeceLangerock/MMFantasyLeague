import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DataSelector from "./DataSelector.js";

import "./../../style/Stats/stats.css";

import BarChart from "./../charts/BarChart.js";

export class UserStats extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="stats-container">

                <DataSelector dataSelectorToRender="user" />

                <div className="chart-section-container">
                  <span className="trophy-title">User Statistics</span>
                  <div className="chart-container">

                    <BarChart dataToDisplay="user" />

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
  isGenerating: state.seasonStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(UserStats);
