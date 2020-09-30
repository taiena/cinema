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

export default genreReducer;
