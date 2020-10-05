import React, { Component } from "react";
import GenreMenu from "./GenreMenu";
import { setGenres } from "../../redux/genreMenuReducer";
import { connect } from "react-redux";
import { genresAPI } from "../../api/api";

class GenreMenuContainer extends Component {
  componentDidMount() {
    genresAPI.getGenres().then((data) => {
      this.props.setGenres(data.genres);
    });
  }

  render() {
    return <GenreMenu genres={this.props.genres} />;
  }
}

let mapStateToProps = (state) => {
  return {
    genres: state.genreMenu.genres,
  };
};

export default connect(mapStateToProps, {
  setGenres,
})(GenreMenuContainer);
