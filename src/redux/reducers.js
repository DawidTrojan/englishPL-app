import { combineReducers } from "redux";
import { standings } from "./standings/reducers";
import { scorers } from "./scorers/reducers";
import { fixtures } from "./fixtures/reducers";
import { teams } from "./teams/reducers";
import { squad } from "./players/reducers";
import { myTeam } from "./myTeam/reducers";
import { firebaseReducer } from "react-redux-firebase";
import { authReducer } from "./auth/reducers";

export default combineReducers({
  standings,
  scorers,
  fixtures,
  teams,
  squad,
  firebaseReducer,
  authReducer,
  myTeam
});
