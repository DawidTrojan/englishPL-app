export const FETCH_PLAYERS = "[players] Fetching players";
export const FETCHED_PLAYERS = "[players] Fetched players";
export const FETCHED_PLAYERS_ERROR = "[players] Fetched players ERROR";

export const startFetchingPlayers = () => {
  return {
    type: FETCH_PLAYERS
  };
};

export const fetchedPlayers = payload => {
  return {
    type: FETCHED_PLAYERS,
    payload
  };
};

export const fetchedPlayersError = payload => {
  return {
    type: FETCHED_PLAYERS_ERROR,
    payload
  };
};

export const getPlayers = id => dispatch => {
  dispatch(startFetchingPlayers());
  const getPlayersUrl = (id = 57) =>
    `http://api.football-data.org//v2/teams/${id}`;
  fetch(getPlayersUrl(id), {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => response.squad)
    .then(squad => dispatch(fetchedPlayers(squad)));
};
