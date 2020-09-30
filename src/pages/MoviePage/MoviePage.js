import React from "react";
import classes from "./MoviePage.module.scss";

let MoviePage = (props) => {
  console.log(props);
  if (!props.film) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.MoviePage}>
      <h1>Movie page</h1>
      <h2>params id: {props.match.params.id}</h2>
      <h2>film name: {props.film.film.title}</h2>
      <h2>film id: {props.film.film.id}</h2>
    </div>
  );
};

export default MoviePage;
