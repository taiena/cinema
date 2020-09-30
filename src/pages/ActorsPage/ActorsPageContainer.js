import React, { Component } from "react";
import * as axios from "axios";
import ActorsPage from "./ActorsPage";
import {
  setActors,
  toggleIsLoading,
  setCurrentPage,
  setTotalPagesCount,
} from "../../redux/actorsReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";

class ActorsPageContainer extends Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    const url = "http://localhost:4000";

    axios
      .get(`${url}/actors?page=${this.props.currentPage}`)
      .then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setActors(response.data.actors);
        this.props.setTotalPagesCount(response.data.meta.total_pages);
        this.props.setCurrentPage(response.data.meta.current_page);
      });
  }

  // при клике на номер страницы новый запрос апи
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    const url = "http://localhost:4000";
    axios.get(`${url}/actors?page=${pageNumber}`).then((response) => {
      this.props.toggleIsLoading(false);
      this.props.setActors(response.data.actors);
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
