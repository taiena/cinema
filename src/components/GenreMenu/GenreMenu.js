import React, { Component } from "react";
import classes from "./GenreMenu.module.scss";
import GenreItem from "./GenreItem/GenreItem";

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
      <ul className={classes.GenreMenu}>
        {items.map((item, index) => {
          return <GenreItem name={item.name} key={index} id={item.id} />;
        })}
      </ul>
    );
  }
}
