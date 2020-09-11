import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import classes from "./GenreMenu.module.scss";
import GenreItem from "./GenreItem/GenreItem";

export default class GenreMenu extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    fetch(url + "/genres")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.genres,
        });
      });
  }
  // старый способ без компонента GenreItem,
  // название жанра передавалось при клике по ссылке,
  // не работало без перезагрузки страницы

  // render() {
  //   const { items } = this.state;
  //   return (
  //     <div className={classes.GenreMenu}>
  //       <h3>GenreMenu</h3>
  //       <ul>
  //         {items.map((item) => (
  //           <li key={item.id}>
  //             <NavLink
  //               to={{ pathname: "/genrepage", state: { data: item.name } }}
  //               exact
  //               activeClassName="active"
  //             >
  //               {item.name}
  //               {item.id}
  //             </NavLink>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  // все еще не работает без перезагрузки страницы

  render() {
    const { items } = this.state;
    return (
      <ul className={classes.GenreMenu}>
        {items.map((item, index) => {
          return <GenreItem name={item.name} key={index} id={item.id} />;
        })}
      </ul>
    );
  }
}
