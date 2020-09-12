import React from "react";
import ActorItem from "./ActorItem/ActorItem";
import classes from "./ActorsList.module.scss";

export default function ActorsList(props) {
  return (
    <div className={classes.ActorsList}>
      {props.items.map((item, index) => {
        return <ActorItem name={item.name} key={index} id={item.id} />;
      })}
    </div>
  );
}
