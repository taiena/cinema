import React, { Component } from "react";
import * as axios from "axios";
import ActorsPage from "./ActorsPage";
import { setActors, toggleIsLoading } from "../../redux/actorsReducer";
import { connect } from "react-redux";

class ActorsPageContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    const url = "http://localhost:4000";
    axios.get(url + "/actors").then((response) => {
      this.props.toggleIsLoading(false);
      this.props.setActors(response.data.actors);
    });
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <div>Loading...</div>
        ) : (
          <ActorsPage actors={this.props.actors} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    actors: state.actorsPage.actors,
    isLoading: state.actorsPage.isLoading,
  };
};

export default connect(mapStateToProps, {
  setActors,
  toggleIsLoading,
})(ActorsPageContainer);
