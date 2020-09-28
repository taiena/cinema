import React from "react";
import classes from "./GenreMenu.module.scss";
import GenreItem from "./GenreItem/GenreItem";

let GenreMenu = (props) => {
  return (
    <ul className={classes.GenreMenu}>
      {props.genres.map((genre, index) => {
        return <GenreItem name={genre.name} key={index} />;
      })}
    </ul>
  );
};

export default GenreMenu;
