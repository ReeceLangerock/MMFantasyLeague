import React from "react";
import * as Redux from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Trophy from "./Trophy";
export class TrophyRoom extends React.Component {
  renderTrophies() {
    if (this.props.awardData) {
      var awardName = this.props.awardData.award[5].awardName
      var awardNum = 5
      return this.props.awardData.award[awardNum].season.map(award => {
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
  awardData: state.awardDataReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrophyRoom);
