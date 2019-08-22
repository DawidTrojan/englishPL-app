import {
  FETCH_INFO_TEAMS,
  FETCHED_INFO_TEAMS,
  FETCHED_INFO_TEAMS_ERROR
} from "./actions";

const initState = {
  loading: false,
  teams: [],
  error: ""
};

export const infoTeams = (state = initState, action) => {
  switch (action.type) {
    case FETCH_INFO_TEAMS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_INFO_TEAMS:
      return {
        loading: false,
        teams: action.payload
      };
    case FETCHED_INFO_TEAMS_ERROR:
      return {
        teams: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
