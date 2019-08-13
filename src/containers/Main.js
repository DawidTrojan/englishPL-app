import { connect } from "react-redux";
import Main from "../components/Main";
import { getTeams } from "../redux/actions";

const mapState = state => ({
  teams: state.teams,
  loading: state.loading
});

const mapDispatch = dispatch => {
  return {
    getTeams: () => dispatch(getTeams())
  };
};

export default connect(
  mapState,
  mapDispatch
)(Main);
