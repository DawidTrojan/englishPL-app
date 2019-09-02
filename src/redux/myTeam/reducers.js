import {
  FETCH_MY_TEAM,
  FETCHED_MY_TEAM,
  FETCHED_MY_TEAM_ERROR
} from "./actions";

const initState = {
  loading: false,
  myTeam: [],
  error: ""
};

export const myTeam = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MY_TEAM:
      return {
        ...state,
        loading: true
      };
    case FETCHED_MY_TEAM:
      return {
        loading: false,
        myTeam: action.payload
      };
    case FETCHED_MY_TEAM_ERROR:
      return {
        myTeam: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
