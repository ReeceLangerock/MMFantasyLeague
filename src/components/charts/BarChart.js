import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import lists from "./../../data/lists.js";

class BarChart extends Component {
  calculateLeagueDate() {
    var statToRender = this.props.leagueDataStatSelected;
    var season = this.props.leagueDataSeasonSelected; 
    var data = this.props.leagueData;
    var xLabel = "";
    lists.getLeagueStatList().map(stat => {
      if (stat.name === this.props.leagueDataStatSelected) {
        xLabel = stat.formattedName;
      }
      return 0;
    });
    var chartIndex = [];
    var chartLabel = [];
    var chartData = [];
    var realIndex = 1;
    if (data.completed) {
      Object.keys(data).map(stat => {
        if (stat === statToRender) {
          
          for (let j = 0; j < data[stat][season].data.length; j++) {
              if (data[stat][season].data[j].score) {
              var dataPoint = data[stat][season].data[j];
              //saved for if i figure out multiple labels
              // label: `${dataPoint.regularOrPlayoffs}, Week ${dataPoint.week}\nOpponent: ${dataPoint.opponent}` }

              chartData.push({ x: realIndex, y: dataPoint.score, width: 10, user: data[stat][season].data[j].user });

              chartLabel.push(data[stat][season].data[j].user);
            } else {
              chartData.push({ x: realIndex, y: data[stat][season].data[j].margin, width: 10, user: data[stat][season].data[j].user });
            }
            chartIndex.push(realIndex);

            realIndex++;
          }
        }
        return 0;
      });
    }

    return { chartData, chartIndex, chartLabel, xLabel };
  }
  calculateUserDate() {
    var statToRender = this.props.userDataStatSelected;
    var data = this.props.userData;
    var xLabel = "";
    lists.getUserStatList().map(stat => {
      if (stat.name === this.props.userDataStatSelected) {
        xLabel = stat.formattedName;
      }
      return 0;
    });
    var chartIndex = [];
    var chartLabel = [];
    var chartData = [];
    var realIndex = 1;
    if (data.completed) {
      Object.keys(data.users.users).map((user, index) => {
        if (this.props.userDataUsersSelected.includes(user)) {
          chartIndex.push(realIndex);
          chartLabel.push(user);
          if (data.users.users[user][statToRender] === 1000) {
            chartData.push({ x: realIndex, y: 0, width: 10, user: user });
          } else {
            chartData.push({ x: realIndex, y: data.users.users[user][statToRender], width: 6, user: user });
          }
          realIndex++;
        }
        return 0;
      });
    }

    return { chartData, chartIndex, chartLabel, xLabel };
  }

  render() {
    // const data = this.dataToRender();

    if (this.props.dataToDisplay === "user") {
      // eslint-disable-next-line
      var { chartIndex, chartLabel, chartData, xLabel } = this.calculateUserDate();
      chartLabel = [];
      chartData.sort((a, b) => b.y - a.y);
      for (let i = chartData.length - 1; i >= 0; i--) {
        chartData[i].x = i + 1;
        chartLabel[i] = chartData[i].user;
      }
    } else if (this.props.dataToDisplay === "league") {
      // eslint-disable-next-line
      var { chartIndex, chartLabel, chartData, xLabel } = this.calculateLeagueDate();
      chartLabel = [];
      chartData.sort((a, b) => b.y - a.y);
      for (let i = chartData.length - 1; i >= 0; i--) {
        chartData[i].x = i + 1;
        chartLabel[i] = chartData[i].user;
      }
    }

    // labelComponent={<VictoryTooltip/>}
    return (
      <VictoryChart
        width={800}
        height={400}
        animate={{
          duration: 1000,
          easing: "bounce"
        }}
        // adding the material theme provided with Victory
        domainPadding={{ x: 20, y: 0 }}
        padding={{ top: 40, bottom: 40, left: 60, right: 20 }}
      >
        <VictoryAxis tickValues={chartIndex} tickFormat={chartLabel} style={{ tickLabels: { fontSize: 10, angle: -60 } }} />
        <VictoryAxis dependentAxis tickFormat={x => x} label={xLabel} axisLabelComponent={<VictoryLabel dy={-20} />} />
        <VictoryBar
          style={{
            data: {
              fill: "rgb(119,36,50)",
              fillOpacity: 0.5,
              stroke: "rgb(119,36,50)",
              strokeWidth: 2
            }
          }}
          data={chartData}
          x="x"
          y="y"
          labels={d => {
            d.y = d.y ? d.y : 0
            if (Number.isInteger(d.y)) {
              return `${d.y}`;
            } else {
              return `${d.y.toFixed(1)}`;
            }
          }}
        />
        <VictoryLabel
          x={30}
          y={30}
          style={{
            stroke: "#fff",
            fill: "#fff",
            angle: 90,
            fontSize: "75px",
            fontFamily: "Roboto",
            fontWeight: "bold"
          }}
        />
      </VictoryChart>
    );
  }
}

const mapStateToProps = state => ({
  userDataStatSelected: state.dataSelectionReducer.userDataStatSelected,
  leagueDataStatSelected: state.dataSelectionReducer.leagueDataStatSelected,
  leagueDataSeasonSelected: state.dataSelectionReducer.leagueDataSeasonSelected,
  userDataSeasonSelected: state.dataSelectionReducer.userDataSeasonSelected,
  userDataUsersSelected: state.dataSelectionReducer.userDataUsersSelected,
  userData: state.userStatsGenerationReducer.data,
  leagueData: state.seasonStatsGenerationReducer.data,
  isGenerating: state.seasonStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
