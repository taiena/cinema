import React from "react";
import MovieItem from "./MovieItem/MovieItem";

export default function MovieList(props) {
  return (
    <ul>
      {props.items.map((item) => {
        return <MovieItem item={item} />;
      })}
    </ul>
  );
}
