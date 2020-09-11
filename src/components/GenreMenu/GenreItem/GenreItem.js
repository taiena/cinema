import React, { Component } from "react";
import classes from "./GenreItem.module.scss";
import { withRouter } from "react-router-dom";

class GenreItem extends Component {
  render() {
    return (
      <li
        className={classes.GenreItem}
        onClick={() => this.props.history.push("/genres/" + this.props.name)}
      >
        <div>
          {this.props.name}
          {this.props.id}
        </div>
      </li>
    );
  }
}
export default withRouter(GenreItem);
