import { connect } from "react-redux";
import Players from "../components/Players";
import { getPlayers } from "../redux/players/actions";

const mapState = state => ({
  squad: state.squad
});

const mapDispatch = dispatch => {
  return {
    getPlayers: id => dispatch(getPlayers(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Players);
