import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainMenu.module.scss";

export default class MainMenu extends Component {
  render() {
    return (
      <div className={classes.MainMenu}>
        <h3>MainMenu</h3>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/actorslist" exact activeClassName="active">
              Actors list
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
