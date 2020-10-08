import React, { Component } from "react";
import Main from "./Main";
import { getFilms } from "../../redux/mainReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";

class MainContainer extends Component {
  componentDidMount() {
    this.props.getFilms();
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
  getFilms,
})(MainContainer);
