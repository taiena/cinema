import React, { Component } from "react";
import classes from "./ActorPage.module.scss";
import * as axios from "axios";

export default class ActorPage extends Component {
  state = {
    item: {},
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    const actorUrl = this.props.match.params.id;

    axios.get(url + "/actors/" + actorUrl).then((response) => {
      this.setState({
        item: response.data.actor,
      });
    });
  }
  render() {
    const { item } = this.state;

    return (
      <div className={classes.ActorPage}>
        <h1>Actor page</h1>
        <h2>{item.name}</h2>
      </div>
    );
  }
}
