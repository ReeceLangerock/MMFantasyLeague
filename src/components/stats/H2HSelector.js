import React from "react";
import { generateH2HStatistics, updateSelectedAwayUser, updateSelectedHomeUser } from "../../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./../../style/H2H.css";
import lists from "./../../data/lists.js";

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }

  handleUserSelection(e) {
    let selectionType = e.target.getAttribute("name");
    let selectedUser = e.target.getAttribute("data-user");

    if (selectionType === "homeUser") {
      this.props.updateSelectedHomeUser(selectedUser);
      let homeUserSpans = document.getElementsByName("homeUser");
      for (let i = 0; i < homeUserSpans.length; i++) {
        homeUserSpans[i].classList.remove("stat-span-active");
      }
    } else if (selectionType === "awayUser") {
      this.props.updateSelectedAwayUser(selectedUser);
      let awayUserSpans = document.getElementsByName("homeUser");
      for (let i = 0; i < awayUserSpans.length; i++) {
        awayUserSpans[i].classList.remove("stat-span-active");
      }
    }
    e.target.classList.toggle("stat-span-active");
  }

  renderActiveUserSpans() {
    const users = lists.getUserList();

    return users.map((user, index) => {
      //sorrry dave
      if (user.name !== "Dave Longwell") {
        let userKey = `user${index}`;
        let elemName = `${this.props.user}User`;
        let style = (this.props.homeUser === user.name && this.props.user === "home") || (this.props.awayUser === user.name && this.props.user === "away") ? "stat-span stat-span-active" : "stat-span";
        let disabled = (this.props.homeUser === user.name && this.props.user === "away") || (this.props.awayUser === user.name && this.props.user === "home") ? " disabled " : "";

        return (
          <span key = {userKey} className={style + disabled} name={elemName} id={user.name} data-user={user.name} onClick={this.handleUserSelection}>
            {user.name}
          </span>
        );
      }

    });
  }

  render() {
    return (
      <div className="selected-user-container">

        {this.renderActiveUserSpans()}

      </div>
    );
  }
}
const mapStateToProps = state => ({
  homeUser: state.h2hDataReducer.homeUser,
  awayUser: state.h2hDataReducer.awayUser,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      generateH2HStatistics,
      updateSelectedAwayUser,
      updateSelectedHomeUser
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DataSelector);
