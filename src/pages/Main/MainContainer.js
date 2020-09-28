import React, { Component } from "react";
import * as axios from "axios";
import Main from "./Main";
import { setFilms } from "../../redux/mainReducer";
import { connect } from "react-redux";

class MainContainer extends Component {
  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/films").then((response) => {
      this.props.setFilms(response.data.films);
    });
  }

  render() {
    return <Main films={this.props.films} />;
  }
}

let mapStateToProps = (state) => {
  return {
    films: state.mainPage.films,
  };
};

export default connect(mapStateToProps, {
  setFilms,
})(MainContainer);
