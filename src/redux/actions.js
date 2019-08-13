export const FETCH_TEAMS = '[teams] Fetching teams';
export const FETCHED_TEAMS = '[teams] Fetched teams';
export const FETCHED_ERROR = '[teams] Fetched teams ERROR';

export const startFetching = () => {
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
        type: FETCHED_ERROR,
        payload
    }
}

export const getTeams = () => dispatch => {
    dispatch(startFetching());
    const url = 'http://api.football-data.org/v2/teams';
    fetch(url, 
        {
        headers: {
            'X-Auth-Token': '408aa47e157148eca4dd2d77436dff81'
        }
    })
    .then(response => response.json())
    .then(response => response.teams)
    .then(teams => dispatch(fetchedTeams(teams)))
}