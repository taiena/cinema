import React from "react";
import classes from "./ActorPage.module.scss";

let ActorPage = (props) => {
  console.log(props);
  if (!props.actor) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.ActorPage}>
      <h1>Actor page</h1>
      <h2>params id: {props.match.params.id}</h2>
      <h2>actor name: {props.actor.actor.name}</h2>
      <h2>actor id: {props.actor.actor.id}</h2>
    </div>
  );
};

export default ActorPage;
