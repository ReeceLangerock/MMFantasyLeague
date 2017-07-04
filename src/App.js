import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Rules from "./components/rules/Rules";
import TrophyRoom from "./components/trophy-room/TrophyRoom";
import Stats from "./components/stats/Stats";
import Nav from "./components/Nav";




const App = () => (
  <div>
    <Nav />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/stats" component={Home} />
      <Route exact path="/rules" component={Rules} />
      <Route exact path="/trophy-room" component={TrophyRoom} />
      <Route exact path="/stats/league" component={Stats} />
      <Route exact path="/stats/user" component={Stats} />

    </main>
  </div>
);

export default App;
