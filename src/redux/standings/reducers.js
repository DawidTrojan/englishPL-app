import {
  FETCH_STANDINGS,
  FETCHED_STANDINGS,
  FETCHED_STANDINGS_ERROR
} from "./actions";

const initState = {
  loading: false,
  standings: [],
  error: ""
};

export const standings = (state = initState, action) => {
  switch (action.type) {
    case FETCH_STANDINGS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_STANDINGS:
      return {
        loading: false,
        standings: action.payload
      };
    case FETCHED_STANDINGS_ERROR:
      return {
        standings: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
