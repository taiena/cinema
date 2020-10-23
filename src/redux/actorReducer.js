import { actorAPI } from "../api/api";

const SET_ACTOR = "SET_ACTOR";

let initialState = {
  actor: null,
};

const actorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTOR:
      return {
        ...state,
        actor: action.actor,
      };

    default:
      return state;
  }
};

export const setActor = (actor) => ({ type: SET_ACTOR, actor });

//thunk
export const getActor = (actorId) => {
  return async (dispatch) => {
    let response = await actorAPI.getActor(actorId);

    dispatch(setActor(response.data));
  };
};

export default actorReducer;
