import { combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import genreReducer from "./genreReducer";
import genreMenuReducer from "./genreMenuReducer";
import actorsReducer from "./actorsReducer";
import actorReducer from "./actorReducer";

let reducers = combineReducers({
  mainPage: mainReducer,
  genrePage: genreReducer,
  genreMenu: genreMenuReducer,
  actorsPage: actorsReducer,
  actorPage: actorReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
