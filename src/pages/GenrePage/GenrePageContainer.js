import React, { Component } from "react";
import * as axios from "axios";
import GenrePage from "./GenrePage";
import { setFilms } from "../../redux/genreReducer";
import { connect } from "react-redux";

class GenrePageContainer extends Component {
  state = {
    genreUrl: this.props.match.params.name,
  };

  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/films?genre=" + this.state.genreUrl).then((response) => {
      this.props.setFilms(response.data.films);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.genreUrl !== this.props.match.params.name) {
      const url = "http://localhost:4000";
      axios
        .get(url + "/films?genre=" + this.state.genreUrl)
        .then((response) => {
          this.setState({
            genreUrl: this.props.match.params.name,
          });
          this.props.setFilms(response.data.films);
        });
    }
  }

  render() {
    const { genreUrl } = this.state;

    return <GenrePage films={this.props.films} genreUrl={genreUrl} />;
  }
}

let mapStateToProps = (state) => {
  return {
    films: state.genrePage.films,
  };
};

export default connect(mapStateToProps, {
  setFilms,
})(GenrePageContainer);
