import { filmAPI } from "../api/api";

const SET_FILM = "SET_FILM";

let initialState = {
  film: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      return {
        ...state,
        film: action.film,
      };

    default:
      return state;
  }
};

export const setFilm = (film) => ({ type: SET_FILM, film });

//thunk
export const getFilm = (filmId) => {
  return async (dispatch) => {
    let response = await filmAPI.getFilm(filmId);

    dispatch(setFilm(response.data));
  };
};

export default movieReducer;
