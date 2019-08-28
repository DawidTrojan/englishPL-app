import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { signIn } from "../redux/auth/actions";

const mapState = state => {
  return {
    authError: state.authReducer.authError,
    authSuccess: state.authReducer.authSuccess,
    auth: state.firebaseReducer.auth
  };
};

const mapDispatch = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  };
};

export default connect(
  mapState,
  mapDispatch
)(SignIn);
