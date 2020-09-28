const SET_ACTORS = "SET_ACTORS";

let initialState = {
  actors: [],
};

const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTORS:
      return {
        ...state,
        actors: [...action.actors],
      };

    default:
      return state;
  }
};

export const setActors = (actors) => ({ type: SET_ACTORS, actors });

export default actorsReducer;
