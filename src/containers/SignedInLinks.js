import { connect } from "react-redux";
import SignedInLinks from "../components/Header/SignedInLinks";
import { signOut } from "../redux/auth/actions";

const mapDispatch = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatch
)(SignedInLinks);
