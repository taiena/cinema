import React, { Component } from "react";

export default class MovieDetail extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.name.toUpperCase()}</h1>
      </div>
    );
  }
}
