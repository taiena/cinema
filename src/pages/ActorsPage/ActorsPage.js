import React, { Component } from "react";
import classes from "./ActorsPage.module.scss";
import ActorsList from "../../components/ActorsList/ActorsList";
import Pagination from "../../components/UI/Pagination/Pagination";

export default class ActorsPage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    pages: [1, 2, 3],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    fetch(url + "/actors")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.actors,
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
    const { error, isLoaded, items, pages } = this.state;

    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className={classes.ActorsPage}>
          <h1>Actors page</h1>
          <Pagination pages={pages} />
          <ActorsList items={items} />
        </div>
      );
    }
  }
}
