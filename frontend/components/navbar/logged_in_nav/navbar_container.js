import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
