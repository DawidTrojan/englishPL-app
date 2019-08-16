import {
  FETCH_SCORERS,
  FETCHED_SCORERS,
  FETCHED_SCORERS_ERROR
} from "./actions";

const initState = {
  loading: false,
  scorers: [],
  error: ""
};

export const scorers = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SCORERS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_SCORERS:
      return {
        loading: false,
        scorers: action.payload
      };
    case FETCHED_SCORERS_ERROR:
      return {
        scorers: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
