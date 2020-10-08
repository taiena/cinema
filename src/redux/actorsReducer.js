import { actorsAPI } from "../api/api";

const SET_ACTORS = "SET_ACTORS";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";

let initialState = {
  actors: [],
  isLoading: false,
  currentPage: 1,
  totalPagesCount: null,
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

    // переключить страницу
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    // добавить в стейт кол-во страниц
    case SET_TOTAL_PAGES_COUNT:
      return {
        ...state,
        totalPagesCount: action.count,
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
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalPagesCount = (totalPagesCount) => ({
  type: SET_TOTAL_PAGES_COUNT,
  count: totalPagesCount,
});

//thunk
export const getActors = (currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    dispatch(setCurrentPage(currentPage));

    actorsAPI.getActors(currentPage).then((data) => {
      dispatch(toggleIsLoading(false));
      dispatch(setActors(data.actors));
      dispatch(setTotalPagesCount(data.meta.total_pages));
    });
  };
};

export default actorsReducer;
