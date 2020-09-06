import React, { Component } from "react";

export default class MoviePage extends Component {
  render() {
    return (
      <div>
        <h1>Movie page</h1>
        <h2>{this.props.match.params.title}</h2>
      </div>
    );
  }
}
