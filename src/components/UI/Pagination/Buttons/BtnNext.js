import React from "react";
import classes from "./Buttons.module.scss";

export default function BtnNext(props) {
  return (
    <div className={classes.Buttons} onClick={props.onClick}>
      next
    </div>
  );
}
