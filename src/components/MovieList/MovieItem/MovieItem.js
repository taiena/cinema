import React from "react";
import classes from "./MovieItem.module.scss";
import { withRouter } from "react-router-dom";

let MovieItem = (props) => {
  return (
    <div
      className={classes.MovieItem}
      onClick={() => props.history.push("/movies/" + props.id)}
    >
      <h3>Название: {props.title}</h3>
      <h3>Оригинальное название: {props.title_original}</h3>
      <p>Год: {props.production_year}</p>
    </div>
  );
};

export default withRouter(MovieItem);
