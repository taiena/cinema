import React, { Component } from "react";
import * as axios from "axios";
import Main from "./Main";

export default class MainContainer extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/films").then((response) => {
      this.setState({
        items: response.data.films,
      });
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>main container</h1>
        <Main items={items} />
      </div>
    );
  }
}
