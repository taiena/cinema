import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainMenu.module.scss";

export default function MainMenu() {
  return (
    <div className={classes.MainMenu}>
      <h3>MainMenu</h3>
      <ul>
        <li>
          <NavLink
            to="/main"
            exact
            activeClassName="active"
            className={classes.MenuItem}
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            exact
            activeClassName="active"
            className={classes.MenuItem}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
