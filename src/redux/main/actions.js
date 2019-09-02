export const FETCH_INFO_TEAMS = "[teams-info] Fetching teams-info";
export const FETCHED_INFO_TEAMS = "[teams-info] Fetched teams-info";
export const FETCHED_INFO_TEAMS_ERROR = "[teams-info] Fetched teams-info ERROR";

export const startFetchingInfoTeams = () => {
  return {
    type: FETCH_INFO_TEAMS
  };
};

export const fetchedInfoTeams = payload => {
  return {
    type: FETCHED_INFO_TEAMS,
    payload
  };
};

export const fetchedInfoTeamsError = payload => {
  return {
    type: FETCHED_INFO_TEAMS_ERROR,
    payload
  };
};

export const getInfoTeams = () => dispatch => {
  dispatch(startFetchingInfoTeams());
  const url = "http://api.football-data.org//v2/competitions/2021/teams";
  fetch(url, {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => response.teams)
    .then(teams => dispatch(fetchedInfoTeams(teams)))
    .catch(error => {
      dispatch(fetchedInfoTeamsError(error));
    });
};
