import React from "react";
import classes from "./Main.module.scss";
import MovieList from "../../components/MovieList/MovieList";

let Main = (props) => {
  return (
    <div className={classes.Main}>
      <h1>Main page</h1>
      <MovieList films={props.films} />
    </div>
  );
};

export default Main;
