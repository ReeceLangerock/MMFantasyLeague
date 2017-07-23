import React from "react";
import "./../../style/TrophyRoom/trophy.css";


const TrophyRoom = props => (
  <div className = 'trophy-item'>
    <h1>

      {props.year} {props.awardName} Award </h1>
      <h2> Won by: &nbsp;
      {props.user}
      <img src = {require("./../../assets/trophy.jpg")}/>
    </h2>


  </div>
);

export default TrophyRoom
