import React, { Component } from "react";
import MoviePage from "./MoviePage";
import { setFilm } from "../../redux/movieReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { filmAPI } from "../../api/api";

class MoviePageContainer extends Component {
  componentDidMount() {
    let filmId = this.props.match.params.id;

    filmAPI.getFilm(filmId).then((data) => {
      this.props.setFilm(data);
    });
  }

  render() {
    return <MoviePage {...this.props} film={this.props.film} />;
  }
}

let mapStateToProps = (state) => {
  return {
    film: state.moviePage.film,
  };
};

let WithUrlDataContainerComponent = withRouter(MoviePageContainer);

export default connect(mapStateToProps, {
  setFilm,
})(WithUrlDataContainerComponent);
