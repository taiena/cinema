import React from "react";
import classes from "./Movie.module.scss";

export default function MovieItem({ item }) {
  return (
    <li className={classes.MovieListItems}>
      {item.title}
      {item.production_year}
    </li>
  );
}
