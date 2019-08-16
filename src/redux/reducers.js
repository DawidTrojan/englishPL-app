import { combineReducers } from "redux";
import { teams } from "./main/reducers";
import { standings } from "./standings/reducers";
import { scorers } from "./scorers/reducers";
import { fixtures } from "./fixtures/reducers";
export default combineReducers({
  teams,
  standings,
  scorers,
  fixtures
});
