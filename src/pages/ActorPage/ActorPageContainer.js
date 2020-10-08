import React, { Component } from "react";
import ActorPage from "./ActorPage";
import { getActor } from "../../redux/actorReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ActorPageContainer extends Component {
  componentDidMount() {
    let actorId = this.props.match.params.id;

    this.props.getActor(actorId);
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
  getActor,
})(WithUrlDataContainerComponent);
