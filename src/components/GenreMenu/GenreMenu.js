import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./GenreMenu.module.scss";

export default class GenreMenu extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    fetch(url + "/genres")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.genres,
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div className={classes.GenreMenu}>
        <h3>GenreMenu</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <NavLink to="/genrepage" exact activeClassName="active">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
