import React from "react";
import "./../../style/TrophyRoom/trophy.css";

const TrophyRoom = props => (
  <div className="trophy-item">
    <span>{props.user}</span>

    <span  className = "trophy-image">
      <img src={require("./../../assets/trophy.jpg")} />

    </span>
    <span className="trophy-item-title">
      {props.year}&nbsp;{props.awardName}
    </span>

  </div>
);

export default TrophyRoom;
