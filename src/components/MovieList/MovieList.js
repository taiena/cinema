import React from "react";
import MovieItem from "./MovieItem/MovieItem";

export default function MovieList(props) {
  return (
    <div>
      {props.films.map((film, index) => {
        return (
          <MovieItem
            title={film.title}
            title_original={film.title_original}
            production_year={film.production_year}
            key={index}
            id={film.id}
          />
        );
      })}
    </div>
  );
}
