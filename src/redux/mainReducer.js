const SET_FILMS = "SET_FILMS";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
  films: [],
  isLoading: false,
};

const mainReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export const setFilms = (films) => ({ type: SET_FILMS, films });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export default mainReducer;
