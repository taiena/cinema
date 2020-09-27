import React from "react";

export default function MoviePage(props) {
  return (
    <div>
      <h1>Movie page</h1>
      <h2>{props.item.title}</h2>
      <div>{props.item.production_year}</div>
    </div>
  );
}
