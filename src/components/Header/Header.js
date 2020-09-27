import React from "react";
import classes from "./Header.module.scss";
import MainMenu from "../MainMenu/MainMenu";
import GenreMenuContainer from "../GenreMenu/GenreMenuContainer";

export default function Header() {
  return (
    <div className={classes.Header}>
      <span>Header</span>
      <MainMenu />
      <GenreMenuContainer />
    </div>
  );
}
