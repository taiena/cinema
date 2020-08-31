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
            <NavLink to="/movielist" exact activeClassName="active">
              Movie list
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