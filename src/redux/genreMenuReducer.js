import { genresAPI } from "../api/api";

const SET_GENRES = "SET_GENRES";

let initialState = {
  genres: [],
};

const genreMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: [...action.genres],
      };

    default:
      return state;
  }
};

export const setGenres = (genres) => ({ type: SET_GENRES, genres });

//thunk
export const getGenres = () => {
  return (dispatch) => {
    genresAPI.getGenres().then((data) => {
      dispatch(setGenres(data.genres));
    });
  };
};

export default genreMenuReducer;
