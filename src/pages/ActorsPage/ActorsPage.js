import React, { Component } from "react";
import classes from "./ActorsPage.module.scss";
import ActorsList from "../../components/ActorsList/ActorsList";
// import Pagination from "../../components/UI/Pagination/Pagination";
import * as axios from "axios";

export default class ActorsPage extends Component {
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
    const { items, pages } = this.state;

    return (
      <div className={classes.ActorsPage}>
        <h1>Actors page</h1>
        {/* <Pagination pages={pages} /> */}
        <ActorsList items={items} />
      </div>
    );
  }
}
