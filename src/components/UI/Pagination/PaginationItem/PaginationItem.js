import React, { Component } from "react";
import classes from "./PaginationItem.module.scss";

export default class PaginationItem extends Component {
  render() {
    return <li className={classes.PaginationItem}>{this.props.page}</li>;
  }
}
