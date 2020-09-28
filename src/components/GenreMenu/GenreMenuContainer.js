import React, { Component } from "react";
import * as axios from "axios";
import GenreMenu from "./GenreMenu";
import { setGenres } from "../../redux/genreMenuReducer";
import { connect } from "react-redux";

class GenreMenuContainer extends Component {
  componentDidMount() {
    const url = "http://localhost:4000";

    axios.get(url + "/genres").then((response) => {
      this.props.setGenres(response.data.genres);
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
