import React, { Component } from "react";
import classes from "./GenreMenu.module.scss";
import GenreItem from "./GenreItem/GenreItem";
import * as axios from "axios";

export default class GenreMenu extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";

    axios.get(url + "/genres").then((response) => {
      this.setState({
        items: response.data.genres,
      });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <ul className={classes.GenreMenu}>
        {items.map((item, index) => {
          return <GenreItem name={item.name} key={index} id={item.id} />;
        })}
      </ul>
    );
  }
}
