import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as V from "victory";
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme } from 'victory';
class BarChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentDidUpdate() {}
  dataToRender() {
    var statToRender = this.props.stats;
    var data = this.props.data;
    var dataForChart = [];
    var chartIndex = [];
    var chartLabel = [];
    var chartData = []
    if (data.completed) {
      Object.keys(data.users.users).map((user, index) => {
        if (this.props.users.includes(user)) {
          chartIndex.push(index+1);
          chartLabel.push(user);
          chartData.push(data.users.users[user][statToRender]);
          dataForChart.push({ value: data.users.users[user][statToRender], user: user });
        }
      });
    }

    return {chartData, chartIndex, chartLabel};
  }

  render() {


    // const data = this.dataToRender();
    let {chartIndex, chartLabel, chartData} = this.dataToRender()
    console.log(chartIndex)
    console.log(chartLabel)
    console.log(chartData)
    return (
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={0}
      >
        <VictoryAxis
          tickCount ={chartLabel.length || 1}
          tickValues={chartIndex}
          tickFormat={chartLabel}
          style={{
            tickLabels: {
              angle: -45
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => x}
        />
        <VictoryBar
          data={chartData}
          labels={(d) => `${d.y}`}
          x="User"
          y="Wins"
        />
      </VictoryChart>
    )
  }
}

const mapStateToProps = state => ({
  season: state.userStatsReducer.season,
  stats: state.userStatsReducer.statistics,
  users: state.userStatsReducer.users,
  data: state.userStatsGenerationReducer.data,
  isGenerating: state.seasonStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
