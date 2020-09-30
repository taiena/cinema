import React, { Component } from "react";
import * as axios from "axios";
import GenrePage from "./GenrePage";
import {
  setFilms,
  toggleIsLoading,
  setGenreUrl,
} from "../../redux/genreReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";

class GenrePageContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    const url = "http://localhost:4000";
    axios
      .get(url + "/films?genre=" + this.props.match.params.name)
      .then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setFilms(response.data.films);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.genreUrl !== this.props.match.params.name) {
      this.props.toggleIsLoading(true);
      const url = "http://localhost:4000";
      axios
        .get(url + "/films?genre=" + this.props.match.params.name)
        .then((response) => {
          this.props.toggleIsLoading(false);
          this.props.setGenreUrl(this.props.match.params.name);
          this.props.setFilms(response.data.films);
        });
    }
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <GenrePage films={this.props.films} genreUrl={this.props.genreUrl} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    films: state.genrePage.films,
    isLoading: state.genrePage.isLoading,
    genreUrl: state.genrePage.genreUrl,
  };
};

export default connect(mapStateToProps, {
  setFilms,
  toggleIsLoading,
  setGenreUrl,
})(GenrePageContainer);
