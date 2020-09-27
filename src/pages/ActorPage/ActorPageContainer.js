import React, { Component } from "react";
import * as axios from "axios";
import ActorPage from "./ActorPage";

export default class ActorPageContainer extends Component {
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

    return <ActorPage item={item} />;
  }
}
