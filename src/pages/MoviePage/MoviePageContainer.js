import React, { Component } from "react";
import * as axios from "axios";
import MoviePage from "./MoviePage";

export default class MoviePageContainer extends Component {
  state = {
    item: {},
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    const filmUrl = this.props.match.params.id;

    axios.get(url + "/films/" + filmUrl).then((response) => {
      this.setState({
        item: response.data.film,
      });
    });
  }
  render() {
    const { item } = this.state;

    return (
      <div>
        <h1>Movie page container</h1>
        <MoviePage item={item} />
      </div>
    );
  }
}
