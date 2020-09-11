import React, { Component } from "react";
import classes from "./ActorPage.module.scss";

export default class ActorPage extends Component {
  state = {
    error: null,
    isLoaded: false,
    item: {},
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    const actorUrl = this.props.match.params.id;
    fetch(url + "/actors/" + actorUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result.actor,
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
        <div className={classes.ActorPage}>
          <h1>Actor page</h1>
          <h2>{item.name}</h2>
        </div>
      );
    }
  }
}
