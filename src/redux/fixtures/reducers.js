import {
  FETCH_FIXTURES,
  FETCHED_FIXTURES,
  FETCHED_FIXTURES_ERROR
} from "./actions";

const initState = {
  loading: false,
  fixtures: [],
  error: ""
};

export const fixtures = (state = initState, action) => {
  switch (action.type) {
    case FETCH_FIXTURES:
      return {
        ...state,
        loading: true
      };
    case FETCHED_FIXTURES:
      return {
        loading: false,
        fixtures: action.payload
      };
    case FETCHED_FIXTURES_ERROR:
      return {
        fixtures: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
