import React from "react";
import classes from "./ActorsPage.module.scss";
import ActorsList from "../../components/ActorsList/ActorsList";

let ActorsPage = (props) => {
  return (
    <div className={classes.ActorsPage}>
      <h1>Actors page</h1>
      <ActorsList actors={props.actors} />
    </div>
  );
};

export default ActorsPage;
