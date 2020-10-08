import React, { Component } from "react";
import ActorsPage from "./ActorsPage";
import { getActors } from "../../redux/actorsReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";

class ActorsPageContainer extends Component {
  componentDidMount() {
    this.props.getActors(this.props.currentPage);
  }

  // при клике на номер страницы новый запрос апи
  onPageChanged = (pageNumber) => {
    this.props.getActors(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <ActorsPage
            actors={this.props.actors}
            totalPagesCount={this.props.totalPagesCount}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    actors: state.actorsPage.actors,
    isLoading: state.actorsPage.isLoading,
    totalPagesCount: state.actorsPage.totalPagesCount,
    currentPage: state.actorsPage.currentPage,
  };
};

export default connect(mapStateToProps, {
  getActors,
})(ActorsPageContainer);
