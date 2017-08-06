import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { generateH2HStatistics } from "../../actions/actions";

export class H2HDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.renderH2HData = this.renderH2HData.bind(this);
  }
  componentWillMount() {
    this.props.generateH2HStatistics(true, false);
  }
  renderH2HData() {

    if (this.props.data.completed) {
      let data = this.props.data.headToHead;
      return Object.keys(data).map(user => {
        if (user === this.props.homeUser) {
          let opponent = this.props.awayUser;
          let dataset = data[user].opponents[opponent];
          // CALCULATE DATA FOR H2H DISPLAY
          let averageScored = (dataset["points-scored-array"].reduce((total, num) => {
            return total + num.score}, 0) / dataset["points-scored-array"].length).toFixed(1);
          let averageAllowed = (dataset["points-allowed-array"].reduce((total, num) => {
            return total + num.score}, 0) / dataset["points-allowed-array"].length).toFixed(1);
          let homeHighScore = Math.max.apply(Math,dataset["points-scored-array"].map(function(d){return d.score;}))
          let awayHighScore = Math.max.apply(Math,dataset["points-allowed-array"].map(function(d){return d.score;}))
          let homeLowScore = Math.min.apply(Math,dataset["points-scored-array"].map(function(d){return d.score;}))
          let awayLowScore = Math.min.apply(Math,dataset["points-allowed-array"].map(function(d ){return d.score;}))
          let closestMatchup = 1000;
          let closestMatchupResult = "";
          let biggestBlowout = 0;
          let biggestBlowoutResult = "";

          let lastMatchup = dataset['points-scored-array'][dataset['points-scored-array'].length-1].date;
          for(let i =0; i < dataset["points-allowed-array"].length; i++){
            let margin = (Math.abs(dataset['points-scored-array'][i].score - dataset['points-allowed-array'][i].score));


            if(margin < closestMatchup){
              closestMatchup = margin;
              (dataset['points-scored-array'][i].score > dataset['points-allowed-array'][i].score ) ? closestMatchupResult = "win" : closestMatchupResult = "loss"
            }
            if(margin > biggestBlowout){
              biggestBlowout = margin;
              (dataset['points-scored-array'][i].score  > dataset['points-allowed-array'][i].score ) ? biggestBlowoutResult = "win" : biggestBlowoutResult = "loss"
            }
          }

          return (
            <div key={user}>
              <div className="grid-title">
                <h1>
                  {user}
                </h1>
                <p>vs.</p>
                <h1>
                  {opponent}
                </h1>
              </div>
              <div className="grid-row">
                <h5>{dataset.wins}</h5> <h5>Wins</h5> <h5>{dataset.losses}</h5>

              </div>
              <div className="grid-row">
                <h5>{averageScored}</h5> <h5>Average Score</h5> <h5>{averageAllowed}</h5>

              </div>


              <div className="grid-row">
                <h5>{homeHighScore}</h5> <h5>High Score</h5> <h5>{awayHighScore}</h5>

              </div>


              <div className="grid-row">
                <h5>{homeLowScore}</h5> <h5>Low Score</h5> <h5>{awayLowScore}</h5>

              </div>
              <br/>

              <div className="grid-row">
                <h5>Closest Matchup</h5> <h5>{closestMatchup.toFixed(2)}pt {closestMatchupResult}</h5>

              </div>

              <div className="grid-row">
                <h5>Biggest Blowout</h5> <h5>{biggestBlowout.toFixed(2)}pt {biggestBlowoutResult}</h5>

              </div>
              <div className="grid-row">
                <h5>Last matchup</h5> <h5>{lastMatchup}</h5>

              </div>

            </div>
          );
        }
      });
    }
  }

  render() {
    return (
      <div className="stat-grid">
        {this.renderH2HData()}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.h2hStatsGenerationReducer.data,
  homeUser: state.h2hDataReducer.homeUser,
  awayUser: state.h2hDataReducer.awayUser,
  isGenerating: state.h2hStatsGenerationReducer.isGenerating
});

const mapDispatchToProps = dispatch => bindActionCreators({ generateH2HStatistics }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(H2HDisplay);
