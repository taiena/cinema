import React from "react";
import classes from "./GenrePage.module.scss";
import MovieList from "../../components/MovieList/MovieList";

export default function GenrePage(props) {
  return (
    <div className={classes.GenrePage}>
      <h1>{props.genreUrl}</h1>
      <MovieList films={props.films} />
    </div>
  );
}
