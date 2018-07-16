import { connect } from 'react-redux';
// import { login, logout, signup } from '../../../actions/session_actions';
// import { openModal } from '../../../actions/modal_actions';
import Sidebar from './sidebar';

const mapState = (state) => {
  return {
    // projects: state.projects,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
  };
};

// TODO: add the addProjects, addPeople dispatches
// const mapDispatch = (dispatch) => {
//
// };

export default connect(mapState)(Sidebar);
