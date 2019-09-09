import { connect } from "react-redux";
import Scorers from "../components/Scorers";
import { getScorers } from "../redux/scorers/actions";

const mapState = state => ({
  scorers: state.scorers
});

const mapDispatch = dispatch => {
  return {
    getScorers: filter => dispatch(getScorers(filter))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Scorers);
