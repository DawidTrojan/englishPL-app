import { connect } from "react-redux";
import Fixtures from "../components/Fixtures";
import { getFixtures } from "../redux/fixtures/actions";

const mapState = state => ({
  fixtures: state.fixtures,
  error: state.error
});

const mapDispatch = dispatch => {
  return {
    getFixtures: matchday => dispatch(getFixtures(matchday))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Fixtures);
