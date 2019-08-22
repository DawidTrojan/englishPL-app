import { connect } from "react-redux";
import Teams from "../components/Teams";
import { getTeams } from "../redux/teams/actions";

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
)(Teams);
