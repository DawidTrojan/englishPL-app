export const FETCH_TEAMS = "[teams] Fetching teams";
export const FETCHED_TEAMS = "[teams] Fetched teams";
export const FETCHED_TEAMS_ERROR = "[teams] Fetched teams ERROR";

export const startFetchingTeams = () => {
  return {
    type: FETCH_TEAMS
  };
};

export const fetchedTeams = payload => {
  return {
    type: FETCHED_TEAMS,
    payload
  };
};

export const fetchedTeamsError = payload => {
  return {
    type: FETCHED_TEAMS_ERROR,
    payload
  };
};

export const getTeams = () => dispatch => {
  dispatch(startFetchingTeams());
  const url = "http://api.football-data.org//v2/competitions/2021";
  fetch(url, {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => response.seasons)
    .then(seasons => dispatch(fetchedTeams(seasons)));
};
