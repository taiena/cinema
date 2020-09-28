import { combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import genreReducer from "./genreReducer";
import actorsReducer from "./actorsReducer";

let reducers = combineReducers({
  mainPage: mainReducer,
  genrePage: genreReducer,
  actorsPage: actorsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
