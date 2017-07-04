import React from "react";
import { Link } from "react-router-dom";



class Nav extends React.Component {

  render() {
    return (
      <header>

        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Mansion Men</li>
              <li>
                <Link to="/stats/league">League Stats</Link>
              </li>
              <li className="has-dropdown">
                <a href="#">Stats</a>
                <ul className="dropdown menu" data-dropdown-menu>
                  <li><a href="stats/league">League Stats</a></li>
                  <li className="active">
                    <a href="stats/user">User Stats</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/trophy-room">Trophy Room</Link>
              </li>
              <li>
                <Link to="/stats/user">User Stats</Link>
              </li>
              <li>
                <Link to="/rules">Rules</Link>
              </li>
            </ul>
          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by
                {" "}
                <a href="reecelangerock.github.io" target="_blank">
                  Reece Langerock
                </a>
              </li>
            </ul>
          </div>

        </div>
      </header>
    );
  }
}

export default Nav;
