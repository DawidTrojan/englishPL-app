export const FETCH_SCORERS = "[scorers] Fetching scorers";
export const FETCHED_SCORERS = "[scorers] Fetched scorers";
export const FETCHED_SCORERS_ERROR = "[scorers] Fetched scorers ERROR";

export const startFetchingScorers = () => {
  return {
    type: FETCH_SCORERS
  };
};

export const fetchedScorers = payload => {
  return {
    type: FETCHED_SCORERS,
    payload
  };
};

export const fetchedScorersError = payload => {
  return {
    type: FETCHED_SCORERS_ERROR,
    payload
  };
};

export const getScorers = filter => dispatch => {
  dispatch(startFetchingScorers());
  const getScorersUrl = (filter = 10) =>
    `https://api.football-data.org/v2/competitions/2021/scorers?limit=${filter}`;
  fetch(getScorersUrl(filter), {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => response.scorers)
    .then(scorers => dispatch(fetchedScorers(scorers)))
    .catch(error => {
      dispatch(fetchedScorersError(error));
    });
};
