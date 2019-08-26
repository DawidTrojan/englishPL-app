import {
  FETCH_FAVOURITES,
  FETCHED_FAVOURITES,
  FETCHED_FAVOURITES_ERROR
} from "./actions";

const initState = {
  loading: false,
  favourites: [],
  error: ""
};

export const favourites = (state = initState, action) => {
  switch (action.type) {
    case FETCH_FAVOURITES:
      return {
        ...state,
        loading: true
      };
    case FETCHED_FAVOURITES:
      return {
        loading: false,
        favourites: action.payload
      };
    case FETCHED_FAVOURITES_ERROR:
      return {
        favourites: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
