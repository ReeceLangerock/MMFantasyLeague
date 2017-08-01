import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as V from "victory";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from "victory";
class BarChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentDidUpdate() {}

  calculateLeagueDate() {
    var statToRender = this.props.leagueStat;
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

          for (let i = 0; i < data[stat].length; i++) {


            for (let j = 0; j < data[stat][i].data.length; j++) {
              if(data[stat][i].data[j].score) {
              chartData.push({ x: realIndex, y: data[stat][i].data[j].score, width: 6 });
            } else {
            chartData.push({ x: realIndex, y: data[stat][i].data[j].margin, width: 6 });

            }
              chartIndex.push(realIndex);

               realIndex++;
            }
          }
          // console.log(data[stat]);
          // data[stat].map((key, index) => {
          //
          //   // console.log(key.data);
          //   chartIndex.push(realIndex);
          //   chartLabel.push(realIndex);
          //     //chartData.push({ x: realIndex, y: data.users.users[user][statToRender], width: 6 });
          //     realIndex++;
          // })
        }
        // if (this.props.users.includes(user)) {
        //   chartIndex.push(realIndex);
        //   chartLabel.push(user);
        //
        //   chartData.push({ x: realIndex, y: data.users.users[user][statToRender], width: 6 });
        //   dataForChart.push({ value: data.users.users[user][statToRender], user: user });
        //   realIndex++;
        // }
      });
    }
    console.log(chartData);
    return { chartData, chartIndex, chartLabel, xLabel };
  }
  calculateUserDate() {
    var statToRender = this.props.userStat;
    var data = this.props.userData;
    var xLabel = this.props.userStat;

    var chartIndex = [];
    var chartLabel = [];
    var chartData = [];
    var realIndex = 1;
    if (data.completed) {
      Object.keys(data.users.users).map((user, index) => {
        if (this.props.users.includes(user)) {
          chartIndex.push(realIndex);
          chartLabel.push(user);

          chartData.push({ x: realIndex, y: data.users.users[user][statToRender], width: 6 });
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
    }
    console.log(chartData);
    //   let domainMax, domainMin = 0;
    //   if(chartData){
    //   domainMax = (1.2* Math.max.apply(Math,chartData.map(function(o){return o.y;})));
    //   domainMin = (.9* Math.min.apply(Math,chartData.map(function(o){return o.y;})));
    // }

    return (
      <VictoryChart
        width={800}
        height={400}
        animate={{
          duration: 500,
          easing: "bounce"
        }}
        // adding the material theme provided with Victory
        domainPadding={{ x: 20 }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis tickValues={chartIndex} tickFormat={chartLabel} style={{ tickLabels: { fontSize: 10, angle: -60 } }} />
        <VictoryAxis dependentAxis tickFormat={x => x} label={xLabel} />
        <VictoryBar
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
  season: state.userStatsReducer.season,
  userStat: state.userStatsReducer.statistics,
  leagueStat: state.seasonStatsReducer.statistics,
  users: state.userStatsReducer.users,
  userData: state.userStatsGenerationReducer.data,
  leagueData: state.seasonStatsGenerationReducer.data,
  isGenerating: state.seasonStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
