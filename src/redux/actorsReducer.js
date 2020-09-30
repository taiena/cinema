const SET_ACTORS = "SET_ACTORS";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
  actors: [],
  isLoading: false,
};

const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTORS:
      return {
        ...state,
        actors: [...action.actors],
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

export const setActors = (actors) => ({ type: SET_ACTORS, actors });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export default actorsReducer;
