import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as d3 from 'd3'
import { scaleLinear, scaleOrdinal } from "d3-scale";
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
    var dataForChart = [

    ];
    if (data.completed) {
      Object.keys(data.users.users).map(user => {
        if (this.props.users.includes(user)) {
          dataForChart.push({value:data.users.users[user][statToRender], user: user});

        }
      });
    }

    return dataForChart;
  }

  createBarChart() {
    var chartData = this.dataToRender();
    var width = 960,
    height = 500;
    const node = this.node;

  var x = d3.scaleBand()
  	       .domain(d3.range(chartData.length))
  	       .rangeRound([0, width])
                 .paddingInner(0.05);

var y = scaleLinear()
    .range([height, 0]);

    //
    // var chart = d3.select(node),
    //     margin = {top: 20, right: 20, bottom: 30, left: 40},
    //     width = +chart.attr("width") - margin.left - margin.right,
    //     height = +chart.attr("height") - margin.top - margin.bottom;



var chart = d3.select(node)
    .attr("width", width)
    .attr("height", height);
    var g = chart.append("g")
        .attr("transform", "translate(" + 20 + "," + 20 + ")");

  x.domain(chartData.map(function(d) { return d.user; }));
  y.domain([0, d3.max(chartData, function(d) { return d.value; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  g.selectAll(".bar")
    .data(chartData)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.user); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.value); });

      select(node).selectAll(".bar").data(chartData).exit().remove();

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}



    // const node = this.node;
    // var chartData = this.dataToRender();
    // const dataMax = max(chartData.value);
    // var margin = {top: 20, right: 30, bottom: 30, left: 40},
    // width = 960 - margin.left - margin.right,
    // height = 500 - margin.top - margin.bottom;
    //
    // select(node).selectAll("rect").data(chartData.value).enter().append("rect");
    // const yScale = scaleLinear().domain([0, dataMax]).range([0, height]);
    // const xScale = d3.scaleOrdinal()
    // .domain(chartData.users)
    // .range([0,width]);
    // console.log(xScale);
    //
    // select(node).selectAll("rect").data(chartData.value).exit().remove();
    // select(node).attr("width", width).attr("height", height);
    //
    // var barWidth = width / chartData.value.length;
    // if (barWidth === Infinity) {
    //   barWidth = 0;
    // }
    // console.log(chartData.value);
    // console.log(barWidth);
    // select(node)
    //   .selectAll("rect")
    //   .data(chartData.value)
    //   .style("fill", "#fe9922")
    //   .attr("x", (d, i) => i * barWidth-1
    //   )
    //   .attr("y", d => this.props.size[1] - yScale(d))
    //   .attr("height", d => yScale(d))
    //   .attr("width", barWidth-1);
    //
    //   var xAxis = d3.axisBottom()
    //   .scale(xScale);

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
