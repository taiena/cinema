import React, { Component } from "react";
import * as axios from "axios";
import GenrePage from "./GenrePage";

export default class GenrePageContainer extends Component {
  state = {
    items: [],
    genreUrl: this.props.match.params.name,
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/films?genre=" + this.state.genreUrl).then((response) => {
      this.setState({
        items: response.data.films,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.genreUrl !== this.props.match.params.name) {
      const url = "http://localhost:4000";
      axios
        .get(url + "/films?genre=" + this.state.genreUrl)
        .then((response) => {
          this.setState({
            items: response.data.films,
            genreUrl: this.props.match.params.name,
          });
        });
    }
  }

  render() {
    const { items, genreUrl } = this.state;

    return (
      <div>
        <h1>Genrepage container</h1>
        <GenrePage items={items} genreUrl={genreUrl} />
      </div>
    );
  }
}
