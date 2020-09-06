import React, { Component } from "react";
import classes from "./GenrePage.module.scss";
import MovieList from "../../components/MovieList/MovieList";

export default class GenrePage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    fetch(url + "/films")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.films,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className={classes.GenrePage}>
          <h1>Genre page</h1>
          <MovieList items={items} />
        </div>
      );
    }
  }
}
