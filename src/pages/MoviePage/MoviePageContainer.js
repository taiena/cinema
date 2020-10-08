import React, { Component } from "react";
import MoviePage from "./MoviePage";
import { getFilm } from "../../redux/movieReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MoviePageContainer extends Component {
  componentDidMount() {
    let filmId = this.props.match.params.id;

    this.props.getFilm(filmId);
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
  getFilm,
})(WithUrlDataContainerComponent);
