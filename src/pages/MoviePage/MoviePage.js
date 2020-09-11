import React, { Component } from "react";

export default class MoviePage extends Component {
  state = {
    error: null,
    isLoaded: false,
    item: {},
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    const filmUrl = this.props.match.params.id;
    fetch(url + "/films/" + filmUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result.film,
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
    const { error, isLoaded, item } = this.state;

    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h1>Movie page</h1>
          <h2>{item.title}</h2>
          <div>{item.production_year}</div>
        </div>
      );
    }
  }
}
