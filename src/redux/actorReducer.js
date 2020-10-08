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
  return (dispatch) => {
    actorAPI.getActor(actorId).then((data) => {
      dispatch(setActor(data));
    });
  };
};

export default actorReducer;
