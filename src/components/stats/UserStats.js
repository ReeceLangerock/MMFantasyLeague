import React from "react";
import { connect } from "react-redux";
import data from "./../../data/data.json";
import userDataHandler from "./../../data/userDataHandler.js";
import * as actions from "./../../actions/actions.js";
import { bindActionCreators } from "redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import {generateUserStatistics, isGeneratingLeagueStatistics, updateUserStatistics} from '../../actions/actions'

//import BarChart from './../charts/BarChart.js'

export class UserStats extends React.Component {
  constructor(props) {
    super(props);
      this.handleStatSelection = this.handleStatSelection.bind(this);
  }
  componentWillMount() {
   this.props.generateUserStatistics(true, false)
  }


  handleStatSelection(e) {
    console.log(e)
    this.props.updateUserStatistics(e)

  }

  renderUserNames = () => {
    return data.users.map(user => {
      return <p key={user.name}>{user.name}</p>;
    });
  }

  renderData = () => {

    var statToRender = this.props.stats;
    var d = this.props.renderData;

      if(d.completed){
        console.log(Object.keys(d.users.users))
        var dataToRender ={data: []};
      //   if(seasonToRender === 'all') {
      //     for(let i=0; i < d[statToRender].length; i++){
      //       for(let j =0; j < d[statToRender][i].data.length; j++) {
      //     dataToRender.data.push(d[statToRender][i].data[j])
      //   }
      //   }
      // }else {
      //   dataToRender = d[statToRender][seasonToRender]
      // }
    dataToRender.data.sort()
  return  Object.keys(d.users.users).map((user) => {


      return <h1 key = {user}>{user} - {d.users.users[user][statToRender]}</h1>
    });
    } else {
      return <p>Nothing To REnder</p>

    }

    }

    render() {
      return (
        <div className="container">
          <div className="row justify-content-center">

            <div className="row">
              <div className="col-md-12">
                <h1>
                  User Statistics
                </h1>
                <p>
                {this.props.isGenerating}
                </p>
                <h2>Currently viewing {this.props.stats} for all users</h2>
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">

                <DropdownButton id = '2'  title="Statistic" bsStyle="default">
                  <MenuItem eventKey="wins" onSelect={this.handleStatSelection}>Wins</MenuItem>
                  <MenuItem eventKey="losses" onSelect={this.handleStatSelection}>Losses</MenuItem>
                  <MenuItem eventKey="total-points-scored" onSelect={this.handleStatSelection}>Total Points Scored</MenuItem>
                  <MenuItem eventKey="total-points-allowed" onSelect={this.handleStatSelection}>Total Points Allowed</MenuItem>
                  <MenuItem eventKey="high-score" onSelect={this.handleStatSelection}>High Score</MenuItem>
                  <MenuItem eventKey="low-score" onSelect={this.handleStatSelection}>Low Score</MenuItem>
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
    stats: state.userStatsReducer.statistics,
    renderData: state.userStatsGenerationReducer.data,
    isGenerating: state.seasonStatsGenerationReducer.isGenerating
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    generateUserStatistics, isGeneratingLeagueStatistics, updateUserStatistics
  }, dispatch)

  var t0 = performance.now();

  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
  export default connect(mapStateToProps, mapDispatchToProps)(UserStats);
