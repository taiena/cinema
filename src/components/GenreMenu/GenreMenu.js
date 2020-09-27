import React from "react";
import classes from "./GenreMenu.module.scss";
import GenreItem from "./GenreItem/GenreItem";

export default function GenreMenu(props) {
  return (
    <ul className={classes.GenreMenu}>
      {props.items.map((item, index) => {
        return <GenreItem name={item.name} key={index} />;
      })}
    </ul>
  );
}
