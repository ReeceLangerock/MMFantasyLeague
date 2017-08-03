import React from "react";
import "./../style/ErrorPage.css";

const Draftboard = props => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="rules-section-container">
        <div className="test">
        <div className = "iframe-container">
        <iframe title= "draftboard" scrolling="no" width="100%" height = "100%" frameBorder="0" src="https://docs.google.com/spreadsheets/d/1GNR127JqIoSgwEcJuZosRAFX4d5RL82HEG1HmG_KNdc/pubhtml?widget=true&amp;headers=false"></iframe>
      </div>
      </div>
      </div>
    </div>
  </div>
);

export default Draftboard;
