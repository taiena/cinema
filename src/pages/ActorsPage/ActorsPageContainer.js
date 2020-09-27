import React, { Component } from "react";
import * as axios from "axios";
import ActorsPage from "./ActorsPage";

export default class ActorsPageContainer extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/actors").then((response) => {
      this.setState({
        items: response.data.actors,
      });
    });
  }

  render() {
    const { items } = this.state;

    return <ActorsPage items={items} />;
  }
}
