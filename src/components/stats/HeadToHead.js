import React from "react";
import "./../../style/Rules.css";
import H2HSelector from "./H2HSelector.js";
import H2HDisplay from "./H2HDisplay.js";

const HeadToHead = props => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="h2h-header">
        <h1 className="trophy-button-title">Head to Head Analysis</h1>

      </div>
      <div className="h2h-container">
        <div className="h2h-selection-container">
          <H2HSelector user={"home"} />
        </div>
        <div className="h2h-content-container">
          <H2HDisplay />
        </div>
        <div className="h2h-selection-container">

          <H2HSelector user={"away"} />
        </div>

      </div>

    </div>
  </div>
);

export default HeadToHead;
