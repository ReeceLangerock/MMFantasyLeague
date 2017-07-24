import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }
  dataToRender() {
    var statToRender = this.props.stats;
    var data = this.props.data;
    var dataForChart = {
      value: [],
      users: []
    };
    if (data.completed) {
      Object.keys(data.users.users).map(user => {
        if (this.props.users.includes(user)) {
          dataForChart.value.push(data.users.users[user][statToRender]);
        }
      });
    }

    return dataForChart;
  }

  createBarChart() {
    const node = this.node;
    var chartData = this.dataToRender();

    const dataMax = max(chartData.value);

    var width = 960, height = 500;

    select(node).selectAll("rect").data(chartData.value).enter().append("rect");
    const yScale = scaleLinear().domain([0, dataMax]).range([0, height]);
    select(node).selectAll("rect").data(chartData.value).exit().remove();
    select(node).attr("width", width).attr("height", height);

    var barWidth = width / chartData.value.length;
    if (barWidth === Infinity) {
      barWidth = 0;
    }
    console.log(chartData.value);
    console.log(barWidth);
    select(node)
      .selectAll("rect")
      .data(chartData.value)
      .style("fill", "#fe9922")
      .attr("x", (d, i) => i * barWidth-1
      )
      .attr("y", d => this.props.size[1] - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", barWidth-1);

    // var y = scaleLinear()
    // .range([height, 0]);
    //
    // var chart = select(node)
    //     .attr("width", width)
    //     .attr("height", height);
    //
    // // d3.tsv("data.tsv", type, function(error, data) {
    // //   y.domain([0, d3.max(chartData, function(d) { return d.value; })]);
    // y.domain([0, max(chartData, function(d) {
    //   return d.value; })]);
    //   var barWidth = width / chartData.length;
    //
    //   var bar = chart.selectAll("g")
    //       .data(chartData)
    //     .enter().append("g")
    //       .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });
    //
    //
    //   bar.append("rect")
    //       .attr("y", function(d) { return y(d.value); })
    //       .attr("height", function(d) { return height - y(d.value); })
    //       .attr("width", barWidth - 1)
    //       .style("fill", '#fe9922');
    //
    //   bar.append("text")
    //       .attr("x", barWidth / 2)
    //       .attr("y", function(d) { return y(d.value) + 3; })
    //       .attr("dy", ".75em")
    //       .text(function(d) { return d.value; });
  }
  render() {
    return <svg ref={node => (this.node = node)} width={500} height={500} />;
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
