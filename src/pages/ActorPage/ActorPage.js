import React from "react";
import classes from "./ActorPage.module.scss";

let ActorPage = (props) => {
  console.log(props);
  return (
    <div className={classes.ActorPage}>
      <h1>Actor page</h1>
      <h2>id: {props.match.params.id}</h2>
      {/* <h2>actor name: {props.actor.name}</h2> */}
    </div>
  );
};

export default ActorPage;
