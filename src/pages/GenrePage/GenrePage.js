import React, { Component } from "react";
import classes from "./GenrePage.module.scss";
import MovieList from "../../components/MovieList/MovieList";
import * as axios from "axios";

export default class GenrePage extends Component {
  state = {
    items: [],
    genreUrl: this.props.match.params.name,
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/films?genre=" + this.state.genreUrl).then((response) => {
      this.setState({
        items: response.data.films,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.genreUrl !== this.props.match.params.name) {
      const url = "http://localhost:4000";
      axios
        .get(url + "/films?genre=" + this.state.genreUrl)
        .then((response) => {
          this.setState({
            items: response.data.films,
            genreUrl: this.props.match.params.name,
          });
        });
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div className={classes.GenrePage}>
        <h1>{this.state.genreUrl}</h1>
        <MovieList items={items} />
      </div>
    );
  }
}
