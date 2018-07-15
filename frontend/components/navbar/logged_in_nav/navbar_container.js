import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/user_actions';
import Navbar from './navbar';



const mapStateToProps = (state) => {
  let firstTeam;
  if (Object.keys(state.entities.teams).length === 0){
    firstTeam = {name: 'hey'};
  } else {
    firstTeam = state.entities.teams[Object.keys(state.entities.teams)[0]];
  }

  console.log(firstTeam);
  return {
    currentUser: state.entities.users[state.session.id],
    team: firstTeam,
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
