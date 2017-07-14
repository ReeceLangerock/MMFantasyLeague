import React from "react";
import * as Redux from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ButtonToolbar, Button } from "react-bootstrap";
import { updateTrophy } from '../../actions/actions'


import Trophy from "./Trophy";
export class TrophyRoom extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrophySelection = this.handleTrophySelection.bind(this);

  }

  renderTrophies = () => {
console.log(this.props)
    if (this.props.awardData) {


      var awardName = this.props.trophy


      return this.props.awardData[awardName].season.map(award => {

        return (
          <Trophy key = {award.year + awardName} awardName = {awardName} year = {award.year} user = {award.user}/>
        );
      });
    }
  }

  handleTrophySelection(e) {
    this.props.updateTrophy(e.target.value);
  }




  render() {
    return (
      <div>
        <h1>Trophy Room</h1>
        <div>
          <div className="row">
            <div className="col-md-12">
              <ButtonToolbar>
                <Button bsStyle ="primary" value = "Champion" onClick = {this.handleTrophySelection}>Champion</Button>
                <Button bsStyle ="primary" value = "Runner-Up" onClick = {this.handleTrophySelection}>Runner Up</Button>
                <Button bsStyle ="primary" value = "Second Runner-Up" onClick = {this.handleTrophySelection}>Second Runner Up</Button>
                <Button bsStyle ="primary" value = "Points Winner" onClick = {this.handleTrophySelection}>Points Champ</Button>
                <Button bsStyle ="primary" value = "Regular Season Winner" onClick = {this.handleTrophySelection}>Regular Season Champ</Button>
                <Button bsStyle ="primary" value = "Consolation Bracket Champion" onClick = {this.handleTrophySelection}>Consolation 'Champ'</Button>
                <Button bsStyle ="primary" value = "Longwell Award Winner" onClick = {this.handleTrophySelection}>Longwell Cup Winner</Button>
                <Button bsStyle ="primary" value = "Playoff Points Champion" onClick = {this.handleTrophySelection}>Playoff Points Champ</Button>
              </ButtonToolbar>

            </div>

          </div>
        </div>

        {this.renderTrophies()}
        <p>Welcome To Trophy Room</p>

        <Trophy />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  awardData: state.awardDataReducer.awardData.awards,
  trophy: state.awardDataReducer.trophy
});

const mapDispatchToProps = dispatch => bindActionCreators({updateTrophy}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrophyRoom);
