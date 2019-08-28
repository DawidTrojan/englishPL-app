import { connect } from "react-redux";
import Menu from "../components/Header/Menu";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(mapState)(Menu);
