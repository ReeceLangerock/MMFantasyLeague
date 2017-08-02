import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as V from "victory";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryTooltip } from "victory";
class BarChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentDidUpdate() {}

  calculateLeagueDate() {
    var statToRender = this.props.leagueDataStatSelected;
    var season = this.props.leagueDataSeasonSelected;
    var data = this.props.leagueData;
    var xLabel = "";
    var chartIndex = [];
    var chartLabel = [];
    var chartData = [];
    var realIndex = 1;
    if (data.completed) {
      Object.keys(data).map(stat => {
        if (stat === statToRender) {
          xLabel = stat;

          for (let j = 0; j < data[stat][season].data.length; j++) {
            if (data[stat][season].data[j].score) {
              var dataPoint = data[stat][season].data[j];
              //saved for if i figure out multiple labels
              // label: `${dataPoint.regularOrPlayoffs}, Week ${dataPoint.week}\nOpponent: ${dataPoint.opponent}` }

              chartData.push({ x: realIndex, y: dataPoint.score, width: 10 });

              chartLabel.push(data[stat][season].data[j].user);
            } else {
              chartData.push({ x: realIndex, y: data[stat][season].data[j].margin, width: 10 });
            }
            chartIndex.push(realIndex);

            realIndex++;
          }
        }
      });
    }
    console.log("chartData", chartData);
    return { chartData, chartIndex, chartLabel, xLabel };
  }
  calculateUserDate() {
    var statToRender = this.props.userDataStatSelected;
    var data = this.props.userData;
    var xLabel = this.props.userDataStatSelected;

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
            chartData.push({ x: realIndex, y: 0, width: 10 });
          } else {
            chartData.push({ x: realIndex, y: data.users.users[user][statToRender], width: 6 });
          }
          realIndex++;
        }
      });
    }

    return { chartData, chartIndex, chartLabel, xLabel };
  }

  render() {
    // const data = this.dataToRender();
    if (this.props.dataToDisplay === "user") {
      var { chartIndex, chartLabel, chartData, xLabel } = this.calculateUserDate();
    } else if (this.props.dataToDisplay === "league") {
      var { chartIndex, chartLabel, chartData, xLabel } = this.calculateLeagueDate();
      console.log(chartData);
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
        <VictoryAxis
          tickValues={chartIndex}
          tickFormat={chartLabel}
          style={{ tickLabels: { fontSize: 10, angle: -60 } }}

        />
        <VictoryAxis dependentAxis tickFormat={x => x} label={xLabel}   axisLabelComponent={<VictoryLabel dy={-20}/>} />
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
