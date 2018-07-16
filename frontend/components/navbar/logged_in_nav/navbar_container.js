import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/user_actions';
import Navbar from './navbar';



const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    teams: state.entities.teams,
    // team:
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
