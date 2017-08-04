import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTrophy } from "../../actions/actions";
import "./../../style/TrophyRoom/trophyroom.css";

import Trophy from "./Trophy";
export class TrophyRoom extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrophySelection = this.handleTrophySelection.bind(this);
  }

  renderTrophies = () => {
    if (this.props.awardData) {
      var awardName = this.props.trophy;

      return this.props.awardData[awardName].season.map(award => {
        return <Trophy key={award.year + awardName} awardName={awardName} year={award.year} user={award.user} />;
      });
    }
  };

  handleTrophySelection(e) {
    var trophySpans = document.getElementsByName("trophySpan");
    for (let i = 0; i < trophySpans.length; i++) {
      trophySpans[i].classList.remove("trophy-span-active");
    }

    e.target.classList.toggle("trophy-span-active");
    this.props.updateTrophy(e.target.getAttribute("data-trophy"));
  }

  render() {
    return (
      <div className="container-fluid">

        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="trophy-room-container">
                <div className="trophy-button-container">
                  <div className="trophy-selection-container">

                  <span className="trophy-button-title">Playoffs</span>
                  <span className="trophy-button trophy-span-active" name="trophySpan" data-trophy="Champion" onClick={this.handleTrophySelection}>
                    Champion
                  </span>
                  <span className="trophy-button" name="trophySpan" data-trophy="Runner-Up" onClick={this.handleTrophySelection}>
                    Runner Up
                  </span>
                  <span className="trophy-button" name="trophySpan" data-trophy="Second Runner-Up" onClick={this.handleTrophySelection}>
                    Second Runner Up
                  </span>
                  <span className="trophy-button" name="trophySpan" data-trophy="Consolation Bracket Champion" onClick={this.handleTrophySelection}>
                    Consolation 'Champ'
                  </span>
                  <span className="trophy-button" name="trophySpan" data-trophy="Playoff Points Champion" onClick={this.handleTrophySelection}>
                    Points Champion
                  </span>
                  <hr />
                </div>
                <div className="trophy-selection-container">

                  <span className="trophy-button-title">Regular Season</span>
                  <span className="trophy-button" name="trophySpan" data-trophy="Points Winner" onClick={this.handleTrophySelection}>
                    Points Champion
                  </span>
                  <span className="trophy-button" name="trophySpan" data-trophy="Regular Season Winner" onClick={this.handleTrophySelection}>
                    Regular Season Champ
                  </span>
                  <hr />
                </div>
                <div className="trophy-selection-container">

                  <span className="trophy-button-title">Shame</span>
                  <span className="trophy-button" name="trophySpan" data-trophy="Longwell Award Winner" onClick={this.handleTrophySelection}>
                    Longwell Cup Winner
                  </span>
                </div>
              </div>

                <div className="trophy-section-container">
                  <span className="trophy-title">Trophy Room</span>
                  <div className="trophy-container">

                    {this.renderTrophies()}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  awardData: state.awardDataReducer.awardData.awards,
  trophy: state.awardDataReducer.trophy
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateTrophy }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrophyRoom);
