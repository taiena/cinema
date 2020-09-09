// import React, { Component } from "react";

// export default class MoviePage extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Movie page</h1>
//         <h2>{this.props.match.params.title}</h2>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class MoviePage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    fetch(url + "/films")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.films,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const filmId = this.props.match.params.title;
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h1>Movie page</h1>
          <h2>{filmId}</h2>
          <div>{items[0].title}</div>
          <div>{items[0].production_year}</div>
          <div>{items[0].id}</div>
        </div>
      );
    }
  }
}
