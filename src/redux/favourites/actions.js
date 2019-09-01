export const FETCH_FAVOURITES = "[favourites] Fetching favourites";
export const FETCHED_FAVOURITES = "[favourites] Fetched favourites";
export const FETCHED_FAVOURITES_ERROR = "[favourites] Fetched favourites ERROR";

export const startFetchingFavourites = () => {
  return {
    type: FETCH_FAVOURITES
  };
};

export const fetchedFavourites = payload => {
  return {
    type: FETCHED_FAVOURITES,
    payload
  };
};

export const fetchedFavouritesError = payload => {
  return {
    type: FETCHED_FAVOURITES_ERROR,
    payload
  };
};

export const getFavourites = id => dispatch => {
  dispatch(startFetchingFavourites());
  const getFavouritesUrl = id => `http://api.football-data.org//v2/teams/${id}`;
  fetch(getFavouritesUrl(id), {
    headers: {
      "X-Auth-Token": "408aa47e157148eca4dd2d77436dff81"
    }
  })
    .then(response => response.json())
    .then(response => dispatch(fetchedFavourites(response)));
};
