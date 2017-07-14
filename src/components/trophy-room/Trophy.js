import React from "react";


const TrophyRoom = props => (
  <div>
    <h1>

      {props.year} {props.awardName} Award </h1>
      <h2> Won by: &nbsp;
      {props.user}
      <img src = {require("./../../assets/trophy.jpg")}/>
    </h2>


  </div>
);

export default TrophyRoom
