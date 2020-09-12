import React from "react";
import classes from "./Buttons.module.scss";

export default function BtnPrev(props) {
  return (
    <div className={classes.Buttons} onClick={props.onClick}>
      prev
    </div>
  );
}
