import React, { Component } from "react";
import classes from "./MovieItem.module.scss";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  render() {
    console.log(this.props.title);
    console.log(this.props.production_year);
    console.log(this.props.id);
    return (
      <div
        className={classes.MovieItem}
        onClick={() => this.props.history.push("/movies/" + this.props.id)}
      >
        <h3>Название: {this.props.title}</h3>
        <h3>Оригинальное название: {this.props.title_original}</h3>
        <p>Год: {this.props.production_year}</p>
        <p>ID: {this.props.id}</p>
      </div>
    );
  }
}
export default withRouter(MovieItem);
