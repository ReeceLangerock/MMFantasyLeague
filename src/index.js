import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react";
import { render } from "react-dom";

import App from "./App.js";
import "./style/App.css";
//import logo from './logo.svg';


const target = document.querySelector("#root");

render(

      <div>
        <App />
      </div>,
  target
);
