import React, { Component } from "react";
import GenreMenu from "./GenreMenu";
import { getGenres } from "../../redux/genreMenuReducer";
import { connect } from "react-redux";

class GenreMenuContainer extends Component {
  componentDidMount() {
    this.props.getGenres();
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
  getGenres,
})(GenreMenuContainer);
