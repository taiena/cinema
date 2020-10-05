import React, { Component } from "react";
import ActorsPage from "./ActorsPage";
import {
  setActors,
  toggleIsLoading,
  setCurrentPage,
  setTotalPagesCount,
} from "../../redux/actorsReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";
import { actorsAPI } from "../../api/api";

class ActorsPageContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);

    actorsAPI.getActors(this.props.currentPage).then((data) => {
      this.props.toggleIsLoading(false);
      this.props.setActors(data.actors);
      this.props.setTotalPagesCount(data.meta.total_pages);
      this.props.setCurrentPage(data.meta.current_page);
    });
  }

  // при клике на номер страницы новый запрос апи
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);

    actorsAPI.getActors(pageNumber).then((data) => {
      this.props.toggleIsLoading(false);
      this.props.setActors(data.actors);
    });
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
  setActors,
  toggleIsLoading,
  setCurrentPage,
  setTotalPagesCount,
})(ActorsPageContainer);
