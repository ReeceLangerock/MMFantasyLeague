import React from "react";
import ReactDOM from "react-dom";
import store, { history } from "./store/store";
import { LinkContainer } from "react-router-bootstrap";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";

import Home from "./components/home/Home";
import Rules from "./components/rules/Rules";
import TrophyRoom from "./components/trophy-room/TrophyRoom";
import LeagueStats from "./components/stats/LeagueStats";
import UserStats from "./components/stats/UserStats";
import HeadToHead from "./components/stats/HeadToHead";
import ErrorPage from "./components/ErrorPage";
import Draftboard from "./components/Draftboard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

it("Home renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Home /></Provider>, div);
});

it("Rules renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Rules /></Provider>, div);
});

it("TrophyRoom renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><TrophyRoom /></Provider>, div);
});

it("LeagueStats renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><LeagueStats /></Provider>, div);
});

it("UserStats renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><UserStats /></Provider>, div);
});

it("HeadToHead renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><HeadToHead /></Provider>, div);
});

it("ErrorPage renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><ErrorPage /></Provider>, div);
});
it("Draftboard renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Draftboard /></Provider>, div);
});
it("Footer renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Footer /></Provider>, div);
});
it("Nav renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><ConnectedRouter history={history}><Nav /></ConnectedRouter></Provider>, div);
});
