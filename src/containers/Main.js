import { connect } from "react-redux";
import Main from "../components/Main";
import { getInfoTeams } from "../redux/main/actions";

const mapState = state => ({
  teams: state.teams
});

const mapDispatch = dispatch => {
  return {
    getInfoTeams: () => dispatch(getInfoTeams())
  };
};

export default connect(
  mapState,
  mapDispatch
)(Main);
