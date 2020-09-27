import React from "react";
import classes from "./ActorItem.module.scss";
import { withRouter } from "react-router-dom";

let ActorItem = (props) => {
  return (
    <div
      className={classes.ActorItem}
      onClick={() => props.history.push("/actors/" + props.id)}
    >
      <h3>Актер: {props.name}</h3>
    </div>
  );
};

export default withRouter(ActorItem);
