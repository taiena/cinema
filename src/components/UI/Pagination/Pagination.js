import React from "react";
import classes from "./Pagination.module.scss";
import PaginationItem from "./PaginationItem/PaginationItem";
import BtnNext from "./Buttons/BtnNext";
import BtnPrev from "./Buttons/BtnPrev";

export default function Pagination(props) {
  return (
    <div className={classes.Pagination}>
      <BtnPrev />
      <ul className={classes.PaginationList}>
        {props.pages.map((page, index) => {
          return <PaginationItem page={page} key={index} />;
        })}
      </ul>
      <BtnNext />
    </div>
  );
}
