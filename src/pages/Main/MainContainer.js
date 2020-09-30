import React, { Component } from "react";
import * as axios from "axios";
import Main from "./Main";
import { setFilms, toggleIsLoading } from "../../redux/mainReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";

class MainContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    const url = "http://localhost:4000";
    axios.get(url + "/films/").then((response) => {
      this.props.toggleIsLoading(false);
      this.props.setFilms(response.data.films);
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
