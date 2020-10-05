import React, { Component } from "react";
import Main from "./Main";
import { setFilms, toggleIsLoading } from "../../redux/mainReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";
import { filmsAPI } from "../../api/api";

class MainContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);

    filmsAPI.getFilms().then((data) => {
      this.props.toggleIsLoading(false);
      this.props.setFilms(data.films);
    });
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Main films={this.props.films} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    films: state.mainPage.films,
    isLoading: state.mainPage.isLoading,
  };
};

export default connect(mapStateToProps, {
  setFilms,
  toggleIsLoading,
})(MainContainer);
