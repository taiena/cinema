import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie" exact activeClassName="active">
              Movie
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
