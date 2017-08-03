import React from "react";
import { connect } from "react-redux";
import DataSelector from "./DataSelector.js";
import BarChart from "./../charts/BarChart.js";
import { bindActionCreators } from "redux";
import "./../../style/Stats/stats.css";

export class LeagueStats extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="stats-container">

                <DataSelector dataSelectorToRender="league" />

                <div className="chart-section-container">
                  <span className="trophy-title">League Statistics</span>
                  <div className="chart-container">

                    <BarChart dataToDisplay="league" />

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LeagueStats);
