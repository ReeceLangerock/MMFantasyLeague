import React from "react";
import * as Redux from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ButtonToolbar, Button, ButtonGroup } from "react-bootstrap";
import { updateTrophy } from "../../actions/actions";
import "./../../style/TrophyRoom/trophyroom.css";

import Trophy from "./Trophy";
export class TrophyRoom extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrophySelection = this.handleTrophySelection.bind(this);
  }

  renderTrophies = () => {
    console.log(this.props);
    if (this.props.awardData) {
      var awardName = this.props.trophy;

      return this.props.awardData[awardName].season.map(award => {
        return <Trophy key={award.year + awardName} awardName={awardName} year={award.year} user={award.user} />;
      });
    }
  };

  handleTrophySelection(e) {
    this.props.updateTrophy(e.target.value);
  }

  render() {
    return (
      <div className="container  contain-all">
        <div className="row justify-content-center">
          <h1>Trophy Room</h1>
          <div>
            <div className="row">
              <div className="col-md-12">
                <ButtonToolbar>
                  <ButtonGroup>
                    <h5>Playoffs</h5>
                    <Button bsStyle="primary" value="Champion" onClick={this.handleTrophySelection}>
                      Champion
                    </Button>
                    <Button bsStyle="primary" value="Runner-Up" onClick={this.handleTrophySelection}>
                      Runner Up
                    </Button>
                    <Button bsStyle="primary" value="Second Runner-Up" onClick={this.handleTrophySelection}>
                      Second Runner Up
                    </Button>
                    <Button bsStyle="primary" value="Consolation Bracket Champion" onClick={this.handleTrophySelection}>
                      Consolation 'Champ'
                    </Button>
                    <Button bsStyle="primary" value="Playoff Points Champion" onClick={this.handleTrophySelection}>
                      Points Champiom
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <h5>Regular Season</h5>
                    <Button bsStyle="primary" value="Points Winner" onClick={this.handleTrophySelection}>
                      Points Champion
                    </Button>
                    <Button bsStyle="primary" value="Regular Season Winner" onClick={this.handleTrophySelection}>
                      Regular Season Champ
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <h5>Shame...Shame...Shame...</h5>
                    <Button bsStyle="primary" value="Longwell Award Winner" onClick={this.handleTrophySelection}>
                      Longwell Cup Winner
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className="trophy-container">
                {this.renderTrophies()}
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
