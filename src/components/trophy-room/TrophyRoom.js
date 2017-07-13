import React from "react";
import * as Redux from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Trophy from "./Trophy";
export class TrophyRoom extends React.Component {
  renderTrophies() {
    if (this.props.awardData) {
      console.log(this.props.awardData.Champion.season)
      var awardName = "Champion";
      return this.props.awardData[awardName].season.map(award => {
        return (
          <Trophy key = {award.year} awardName = {awardName} year = {award.year} user = {award.user}/>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Trophy Room</h1>

        {this.renderTrophies()}
        <p>Welcome To Trophy Room</p>

        <Trophy />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  awardData: state.awardDataReducer.awards
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrophyRoom);
