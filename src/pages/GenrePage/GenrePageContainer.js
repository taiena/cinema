import React, { Component } from "react";
import * as axios from "axios";
import GenrePage from "./GenrePage";
import { setFilms, toggleIsLoading } from "../../redux/genreReducer";
import { connect } from "react-redux";
import Preloader from "../../components/UI/Preloader/Preloader";

class GenrePageContainer extends Component {
  state = {
    genreUrl: this.props.match.params.name,
  };

  componentDidMount() {
    this.props.toggleIsLoading(true);
    const url = "http://localhost:4000";
    axios.get(url + "/films?genre=" + this.state.genreUrl).then((response) => {
      this.props.toggleIsLoading(false);
      this.props.setFilms(response.data.films);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.genreUrl !== this.props.match.params.name) {
      this.props.toggleIsLoading(true);
      const url = "http://localhost:4000";
      axios
        .get(url + "/films?genre=" + this.state.genreUrl)
        .then((response) => {
          this.setState({
            genreUrl: this.props.match.params.name,
          });
          this.props.toggleIsLoading(false);
          this.props.setFilms(response.data.films);
        });
    }
  }

  render() {
    const { genreUrl } = this.state;
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <GenrePage films={this.props.films} genreUrl={genreUrl} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    films: state.genrePage.films,
    isLoading: state.genrePage.isLoading,
  };
};

export default connect(mapStateToProps, {
  setFilms,
  toggleIsLoading,
})(GenrePageContainer);
