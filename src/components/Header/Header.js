import React, { Component } from "react";
import classes from "./Header.module.scss";
import MainMenu from "../MainMenu/MainMenu";
import GenreMenuContainer from "../GenreMenu/GenreMenuContainer";

export default class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <span>Header</span>
        <MainMenu />
        <GenreMenuContainer />
      </div>
    );
  }
}
