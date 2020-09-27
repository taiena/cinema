import React, { Component } from "react";
import * as axios from "axios";
import GenreMenu from "./GenreMenu";

export default class GenreMenuContainer extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";

    axios.get(url + "/genres").then((response) => {
      this.setState({
        items: response.data.genres,
      });
    });
  }

  render() {
    const { items } = this.state;
    return <GenreMenu items={items} />;
  }
}
