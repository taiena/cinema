import React, { Component } from "react";
import classes from "./GenrePage.module.scss";
import MovieList from "../../components/MovieList/MovieList";

export default class GenrePage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    genreUrl: this.props.match.params.name,
  };

  componentDidMount() {
    // console.log("mount state: ", this.state.genreUrl);
    const url = "http://localhost:4000";
    fetch(url + "/films?genre=" + this.state.genreUrl)
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

  componentDidUpdate(prevProps, prevState) {
    // console.log("Update state: ", this.state.genreUrl);
    // console.log("Update props: ", this.props.match.params.name);
    // console.log("PrevState: ", prevState);
    // console.log("PrevProps: ", prevProps);

    if (prevState.genreUrl !== this.props.match.params.name) {
      const url = "http://localhost:4000";
      fetch(url + "/films?genre=" + this.state.genreUrl)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.films,
              genreUrl: this.props.match.params.name,
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
          {/* <h1>{this.props.location.state.data}</h1> */}
          <h1>{this.state.genreUrl}</h1>
          <MovieList items={items} />
        </div>
      );
    }
  }
}
