import { combineReducers } from "redux";
import {
    FETCH_TEAMS,
    FETCHED_TEAMS,
    FETCHED_ERROR
} from './actions'

const initState = {
    loading: false,
    teams: [],
    error: ''
}

const teams = (state = initState, action) => {
    switch(action.type){
        case FETCH_TEAMS:
            return {
                ...state,
                loading: true
            };
        case FETCHED_TEAMS:
            return {
                loading: false,
                teams: action.payload
            };
        case FETCHED_ERROR:
            return {
                teams: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default combineReducers({
    teams
});
