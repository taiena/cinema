import React, { Component } from "react";
import * as axios from "axios";
import ActorsPage from "./ActorsPage";
import { setActors } from "../../redux/actorsReducer";
import { connect } from "react-redux";

class ActorsPageContainer extends Component {
  componentDidMount() {
    const url = "http://localhost:4000";
    axios.get(url + "/actors").then((response) => {
      this.props.setActors(response.data.actors);
    });
  }

  render() {
    return <ActorsPage actors={this.props.actors} />;
  }
}

let mapStateToProps = (state) => {
  return {
    actors: state.actorsPage.actors,
  };
};

export default connect(mapStateToProps, {
  setActors,
})(ActorsPageContainer);
