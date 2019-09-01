import { connect } from "react-redux";
import Favourites from "../components/Favourites";
import { getFavourites } from "../redux/favourites/actions";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth,
    profile: state.firebaseReducer.profile,
    teams: state.teams,
    loading: state.loading
  };
};

const mapDispatch = dispatch => {
  return {
    getFavourites: id => dispatch(getFavourites(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Favourites);
