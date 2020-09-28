const SET_FILMS = "SET_FILMS";

let initialState = {
  films: [],
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        films: [...action.films],
      };

    default:
      return state;
  }
};

export const setFilms = (films) => ({ type: SET_FILMS, films });

export default genreReducer;
