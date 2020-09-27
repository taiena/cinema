import React, { Component } from "react";
import classes from "./Main.module.scss";
import MovieList from "../../components/MovieList/MovieList";
import * as axios from "axios";

export default class Main extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/films").then((response) => {
      this.setState({
        items: response.data.films,
      });
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div className={classes.Main}>
        <h1>Main page</h1>
        <MovieList items={items} />
      </div>
    );
  }
}
