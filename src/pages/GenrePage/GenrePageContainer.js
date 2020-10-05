import React, { Component } from "react";
import GenrePage from "./GenrePage";
import {
  setFilms,
  toggleIsLoading,
  setGenreUrl,
} from "../../redux/genreReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";
import { filmsGenreAPI } from "../../api/api";

class GenrePageContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    const genreUrl = this.props.match.params.name;

    filmsGenreAPI.getFilmsGenre(genreUrl).then((data) => {
      this.props.toggleIsLoading(false);
      this.props.setFilms(data.films);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const genreUrl = this.props.match.params.name;
    if (prevProps.genreUrl !== genreUrl) {
      this.props.toggleIsLoading(true);

      filmsGenreAPI.getFilmsGenre(genreUrl).then((data) => {
        this.props.toggleIsLoading(false);
        this.props.setGenreUrl(genreUrl);
        this.props.setFilms(data.films);
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
