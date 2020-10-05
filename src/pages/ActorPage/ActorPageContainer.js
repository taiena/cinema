import React, { Component } from "react";
import ActorPage from "./ActorPage";
import { setActor } from "../../redux/actorReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actorAPI } from "../../api/api";

class ActorPageContainer extends Component {
  componentDidMount() {
    let actorId = this.props.match.params.id;

    actorAPI.getActor(actorId).then((data) => {
      this.props.setActor(data);
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
