import React from "react";
import classes from "./MovieItem.module.scss";

export default function MovieItem({ item }) {
  return (
    <li className={classes.MovieItem}>
      {item.title}
      {item.production_year}
    </li>
  );
}
