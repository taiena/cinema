import React, { Component } from "react";

export default class ActorsList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.actors,
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
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h1>Actors list page</h1>
          <ul>
            {items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
