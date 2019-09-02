export const FETCH_FIXTURES = "[fixtures] Fetching fixtures";
export const FETCHED_FIXTURES = "[fixtures] Fetched fixtures";
export const FETCHED_FIXTURES_ERROR = "[fixtures] Fetched fixtures ERROR";

export const startFetchingFixtures = () => {
  return {
    type: FETCH_FIXTURES
  };
};

export const fetchedFixtures = payload => {
  return {
    type: FETCHED_FIXTURES,
    payload
  };
};

export const fetchedFixturesError = payload => {
  return {
    type: FETCHED_FIXTURES_ERROR,
    payload
  };
};

export const getFixtures = matchday => dispatch => {
  dispatch(startFetchingFixtures());
  const getFixturesUrl = (matchday = 1) =>
    `http://api.football-data.org//v2/competitions/2021/matches?matchday=${matchday}`;
  fetch(getFixturesUrl(matchday), {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => response.matches)
    .then(matches => dispatch(fetchedFixtures(matches)))
    .catch(error => {
      dispatch(fetchedFixturesError(error));
    });
};
