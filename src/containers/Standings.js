import { connect } from "react-redux";
import Standings from "../components/Standings";
import { getStandings } from "../redux/standings/actions";

const mapState = state => ({
  standings: state.standings
});

const mapDispatch = dispatch => {
  return {
    getStandings: () => dispatch(getStandings())
  };
};

export default connect(
  mapState,
  mapDispatch
)(Standings);
