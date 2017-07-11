import React from "react";

const TrophyRoom = props => (
  <div>
    <h1>

      {props.year}{props.awardName} Award </h1>
      <h2> Won by
      {props.user}
    </h2>


  </div>
);

export default TrophyRoom
