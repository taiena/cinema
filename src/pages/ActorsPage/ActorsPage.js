import React from "react";
import classes from "./ActorsPage.module.scss";
import ActorsList from "../../components/ActorsList/ActorsList";
// import Pagination from "../../components/UI/Pagination/Pagination";

export default function ActorsPage(props) {
  return (
    <div className={classes.ActorsPage}>
      <h1>Actors page</h1>
      {/* <Pagination pages={pages} /> */}
      <ActorsList items={props.items} />
    </div>
  );
}
