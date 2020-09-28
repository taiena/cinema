import React from "react";
import ActorItem from "./ActorItem/ActorItem";
import classes from "./ActorsList.module.scss";

export default function ActorsList(props) {
  return (
    <div className={classes.ActorsList}>
      {props.actors.map((actor, index) => {
        return <ActorItem name={actor.name} key={index} id={actor.id} />;
      })}
    </div>
  );
}
