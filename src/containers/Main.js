import { connect } from 'react-redux';
import Main from '../components/Main';
import { getTeams } from '../redux/actions';


const mapState = ({ teams: { teams } }) => ({ teams });

const mapDispatch = dispatch => {
    return {
         getTeams: () => dispatch(getTeams())
    };
};

export default connect(
    mapState,
    mapDispatch
)(Main);