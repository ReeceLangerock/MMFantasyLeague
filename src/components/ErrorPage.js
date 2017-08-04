import React from "react";
import "./../style/ErrorPage.css";

const ErrorPage = props => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="memorial-container">
      <h1 className = "error-title">Jay Cutler Memorial Page</h1>

          <p className = "error-subtitle">You're probably not where you meant to be. Instead, you're somewhere better... </p>


    </div>

    <div className = "memorial-image-container">
    <div className = "memorial-image">
    <img alt = "cutty-1" src = {require('./../assets/images/cutty1.gif')}/>
    </div>

    <div className = "memorial-image">
    <img alt = "cutty-2" src = {require('./../assets/images/cutty2.gif')}/>
    </div>

    <div className = "memorial-image">
    <img alt = "cutty-3" src = {require('./../assets/images/cutty3.gif')}/>
    </div>

    <div className = "memorial-image">
    <img alt = "cutty-4" src = {require('./../assets/images/cutty4.gif')}/>
    </div>

    </div>

  </div>
</div>
);

export default ErrorPage;
