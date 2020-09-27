import React from "react";
import classes from "./GenreItem.module.scss";
import { withRouter } from "react-router-dom";

let GenreItem = (props) => {
  return (
    <li
      className={classes.GenreItem}
      onClick={() => props.history.push("/genres/" + props.name)}
    >
      <div>{props.name}</div>
    </li>
  );
};

export default withRouter(GenreItem);
