import { connect } from "react-redux";
import MyTeam from "../components/MyTeam";
import { getMyTeam } from "../redux/myTeam/actions";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth,
    profile: state.firebaseReducer.profile,
    myTeam: state.myTeam
  };
};

const mapDispatch = dispatch => {
  return {
    getMyTeam: id => dispatch(getMyTeam(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(MyTeam);
