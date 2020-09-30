import React from "react";
import classes from "./ActorsPage.module.scss";
import ActorsList from "../../components/ActorsList/ActorsList";

let ActorsPage = (props) => {
  // кол-во страниц
  let totalPagesCount = props.totalPagesCount;
  let pages = [];
  for (let i = 1; i <= totalPagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.ActorsPage}>
      {/* вывод массива нормеров страниц */}
      <div>
        <span>pagination: </span>
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              // className={props.currentPage === page && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}&nbsp;
            </span>
          );
        })}
      </div>

      <h1>Actors page</h1>
      <ActorsList actors={props.actors} />
    </div>
  );
};

export default ActorsPage;
