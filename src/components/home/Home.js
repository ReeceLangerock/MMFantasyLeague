import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";

import "./../../style/Home.css";

export class Home extends React.Component {
  componentWillMount() {
    document.body.classList.add("disable-scroll");
  }
  componentWillUnmount() {
    document.body.classList.remove("disable-scroll");
  }
  render() {
    return (
      <div className="parallax">
        <div className="container">
          <div className="hover-container">
            <Jumbotron className="title">

              <h1 className="title-font">Mansion Men</h1>
              <h3>Official Home of the Mansion Men Fantasy Football League</h3>

            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("about")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
