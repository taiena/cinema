import { filmsGenreAPI } from "../api/api";

const SET_FILMS = "SET_FILMS";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const SET_GENRE_URL = "SET_GENRE_URL";

let initialState = {
  films: [],
  isLoading: false,
  genreUrl: null,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        films: [...action.films],
      };

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case SET_GENRE_URL:
      return {
        ...state,
        genreUrl: action.genreUrl,
      };

    default:
      return state;
  }
};

export const setFilms = (films) => ({ type: SET_FILMS, films });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const setGenreUrl = (genreUrl) => ({
  type: SET_GENRE_URL,
  genreUrl,
});

//thunk
export const getFilmsGenre = (genreUrl) => {
  return async (dispatch) => {
    dispatch(toggleIsLoading(true));

    let response = await filmsGenreAPI.getFilmsGenre(genreUrl);

    dispatch(toggleIsLoading(false));
    dispatch(setFilms(response.data.films));
    dispatch(setGenreUrl(genreUrl));
  };
};

export default genreReducer;
