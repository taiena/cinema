import React from "react";
import classes from "./ActorItem.module.scss";
import { NavLink } from "react-router-dom";

let ActorItem = (props) => {
  return (
    <div className={classes.ActorItem}>
      <NavLink to={"/actors/" + props.id}>
        <h3>Актер: {props.name}</h3>
      </NavLink>
    </div>
  );
};

export default ActorItem;
