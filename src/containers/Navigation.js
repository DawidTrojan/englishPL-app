import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth,
    profile: state.firebaseReducer.profile
  };
};

export default connect(mapState)(Navigation);
