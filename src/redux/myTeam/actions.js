export const FETCH_MY_TEAM = "[my-team] Fetching my-team";
export const FETCHED_MY_TEAM = "[my-team] Fetched my-team";
export const FETCHED_MY_TEAM_ERROR = "[my-team] Fetched my-team ERROR";

export const startFetchingMyTeam = () => {
  return {
    type: FETCH_MY_TEAM
  };
};

export const fetchedMyTeam = payload => {
  return {
    type: FETCHED_MY_TEAM,
    payload
  };
};

export const fetchedMyTeamError = payload => {
  return {
    type: FETCHED_MY_TEAM_ERROR,
    payload
  };
};

export const getMyTeam = id => dispatch => {
  dispatch(startFetchingMyTeam());
  const getMyTeamUrl = id => `https://api.football-data.org//v2/teams/${id}`;
  fetch(getMyTeamUrl(id), {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => dispatch(fetchedMyTeam(response)))
    .catch(error => {
      dispatch(fetchedMyTeamError(error));
    });
};
