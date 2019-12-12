export const FETCH_STANDINGS = "[standings] Fetching standings";
export const FETCHED_STANDINGS = "[standings] Fetched standings";
export const FETCHED_STANDINGS_ERROR = "[standings] Fetched standings ERROR";

export const startFetchingStandings = () => {
  return {
    type: FETCH_STANDINGS
  };
};

export const fetchedStandings = payload => {
  return {
    type: FETCHED_STANDINGS,
    payload
  };
};

export const fetchedStandingsError = payload => {
  return {
    type: FETCHED_STANDINGS_ERROR,
    payload
  };
};

export const getStandings = () => dispatch => {
  dispatch(startFetchingStandings());
  const url =
    "https://api.football-data.org/v2/competitions/2021/standings?standingType=TOTAL";
  fetch(url, {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => response.standings)
    .then(standings => dispatch(fetchedStandings(standings)))
    .catch(error => {
      dispatch(fetchedStandingsError(error));
    });
};
