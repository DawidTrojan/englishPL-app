import {
  FETCH_MY_TEAM,
  FETCHED_MY_TEAM,
  FETCHED_MY_TEAM_ERROR
} from "./actions";

const initState = {
  myTeam: [],
  error: ""
};

export const myTeam = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MY_TEAM:
      return state;
    case FETCHED_MY_TEAM:
      return {
        myTeam: action.payload
      };
    case FETCHED_MY_TEAM_ERROR:
      return {
        myTeam: [],
        error: action.payload
      };
    default:
      return state;
  }
};
