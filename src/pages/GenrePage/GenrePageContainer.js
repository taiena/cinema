import React, { Component } from "react";
import GenrePage from "./GenrePage";
import { getFilmsGenre } from "../../redux/genreReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";

class GenrePageContainer extends Component {
  componentDidMount() {
    const genreUrl = this.props.match.params.name;
    this.props.getFilmsGenre(genreUrl);
  }

  componentDidUpdate(prevProps, prevState) {
    const genreUrl = this.props.match.params.name;
    if (prevProps.genreUrl !== genreUrl) {
      this.props.getFilmsGenre(genreUrl);
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
  getFilmsGenre,
})(GenrePageContainer);
