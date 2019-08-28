import { connect } from "react-redux";
import Favourites from "../components/Favourites";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(
  mapState,
  null
)(Favourites);
