import { connect } from "react-redux";
import Scorers from "../components/Scorers";
import { getScorers } from "../redux/scorers/actions";

const mapState = state => ({
  scorers: state.scorers,
  loading: state.loading
});

const mapDispatch = dispatch => {
  return {
    getScorers: () => dispatch(getScorers())
  };
};

export default connect(
  mapState,
  mapDispatch
)(Scorers);
