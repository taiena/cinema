import React, { Component } from "react";
import * as axios from "axios";
import ActorPage from "./ActorPage";
import { setActor } from "../../redux/actorReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ActorPageContainer extends Component {
  componentDidMount() {
    const url = "http://localhost:4000";
    let actorId = this.props.match.params.id;

    console.log("actor id: " + actorId);

    axios.get(url + "/actors/" + actorId).then((response) => {
      this.props.setActor(response.data);
    });
  }

  render() {
    return <ActorPage {...this.props} actor={this.props.actor} />;
  }
}

let mapStateToProps = (state) => {
  return {
    actor: state.actorPage.actor,
  };
};

let WithUrlDataContainerComponent = withRouter(ActorPageContainer);

export default connect(mapStateToProps, {
  setActor,
})(WithUrlDataContainerComponent);
