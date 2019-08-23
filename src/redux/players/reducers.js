import {
  FETCH_PLAYERS,
  FETCHED_PLAYERS,
  FETCHED_PLAYERS_ERROR
} from "./actions";

const initState = {
  loading: false,
  squad: [],
  error: ""
};

export const squad = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_PLAYERS:
      return {
        loading: false,
        squad: action.payload
      };
    case FETCHED_PLAYERS_ERROR:
      return {
        squad: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
