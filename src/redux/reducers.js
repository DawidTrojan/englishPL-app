import { combineReducers } from "redux";
import { teams } from "./main/reducers";
import { standings } from "./standings/reducers";
export default combineReducers({
  teams,
  standings
});
