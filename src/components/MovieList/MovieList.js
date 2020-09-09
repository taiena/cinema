import React from "react";
import MovieItem from "./MovieItem/MovieItem";

export default function MovieList(props) {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <MovieItem
            title={item.title}
            title_original={item.title_original}
            production_year={item.production_year}
            key={index}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
