import React, { Component } from "react";
import classes from "./ActorItem.module.scss";
import { withRouter } from "react-router-dom";

class ActorItem extends Component {
  render() {
    return (
      <div
        className={classes.ActorItem}
        onClick={() => this.props.history.push("/actors/" + this.props.id)}
      >
        <h3>Актер: {this.props.name}</h3>
      </div>
    );
  }
}
export default withRouter(ActorItem);
