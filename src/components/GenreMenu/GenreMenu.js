import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./GenreMenu.module.scss";

export default class GenreMenu extends Component {
  render() {
    return (
      <div className={classes.GenreMenu}>
        <h3>GenreMenu</h3>
        <ul>
          <li>
            <NavLink to="/genrepage" exact activeClassName="active">
              Genre Page
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
