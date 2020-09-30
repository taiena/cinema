import React, { Component } from "react";
import * as axios from "axios";
import MoviePage from "./MoviePage";
import { setFilm } from "../../redux/movieReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MoviePageContainer extends Component {
  componentDidMount() {
    const url = "http://localhost:4000";
    let filmId = this.props.match.params.id;

    axios.get(url + "/films/" + filmId).then((response) => {
      this.props.setFilm(response.data);
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
