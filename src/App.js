import React from "react";
import { Route, Switch } from "react-router-dom";
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
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store/store";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Nav />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/stats" component={Home} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/trophy-room" component={TrophyRoom} />
            <Route exact path="/stats/league" component={LeagueStats} />
            <Route exact path="/stats/user" component={UserStats} />
            <Route exact path="/stats/head-to-head" component={HeadToHead} />
            <Route exact path="/draftboard" component={Draftboard} />
            <Route path="*" component={ErrorPage} />
          </Switch>
          <Footer/>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
