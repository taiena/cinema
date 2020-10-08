import { combineReducers, createStore, applyMiddleware } from "redux";
import mainReducer from "./mainReducer";
import genreReducer from "./genreReducer";
import genreMenuReducer from "./genreMenuReducer";
import actorsReducer from "./actorsReducer";
import actorReducer from "./actorReducer";
import movieReducer from "./movieReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  mainPage: mainReducer,
  genrePage: genreReducer,
  genreMenu: genreMenuReducer,
  actorsPage: actorsReducer,
  actorPage: actorReducer,
  moviePage: movieReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
