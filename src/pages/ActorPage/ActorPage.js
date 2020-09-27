import React from "react";
import classes from "./ActorPage.module.scss";

export default function ActorPage(props) {
  return (
    <div className={classes.ActorPage}>
      <h1>Actor page</h1>
      <h2>{props.item.name}</h2>
    </div>
  );
}
