import React from "react";
import classes from "./MovieItem.module.scss";
import { NavLink } from "react-router-dom";

let MovieItem = (props) => {
  return (
    <div className={classes.MovieItem}>
      <NavLink to={"/films/" + props.id}>
        <h3>Название: {props.title}</h3>
        <h3>Оригинальное название: {props.title_original}</h3>
        <p>Год: {props.production_year}</p>
      </NavLink>
    </div>
  );
};

export default MovieItem;
