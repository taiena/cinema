import React from "react";
import classes from "./Main.module.scss";
import MovieList from "../../components/MovieList/MovieList";

export default function Main(props) {
  return (
    <div className={classes.Main}>
      <h1>Main page</h1>
      <MovieList items={props.items} />
    </div>
  );
}
