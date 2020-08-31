import React, { Component } from "react";
import classes from "./Movie.module.scss";

export default class MovieList extends Component {
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
        <div className={classes.MovieList}>
          <h1>Movie list page</h1>
          <ul>
            {items.map((item) => (
              <li className={classes.MovieListItems} key={item.id}>
                {item.title}
                {item.production_year}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
