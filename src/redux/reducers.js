import { combineReducers } from "redux";
import { standings } from "./standings/reducers";
import { scorers } from "./scorers/reducers";
import { fixtures } from "./fixtures/reducers";
import { teams } from "./teams/reducers";
import { infoTeams } from "./main/reducers";
import { squad } from "./players/reducers";

export default combineReducers({
  standings,
  scorers,
  fixtures,
  teams,
  infoTeams,
  squad
});
