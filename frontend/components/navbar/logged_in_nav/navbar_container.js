import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchUser } from '../../../actions/user_actions';
import { fetchTeam, deleteTeam } from '../../../actions/team_actions';
import { openDropdown } from '../../../actions/dropdown_actions';
import { openSidebar } from '../../../actions/sidebar_actions';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';



const mapStateToProps = (state, ownProps) => {
  let currentTeamId;

  if (state.entities.teams[parseInt(ownProps.match.params.teamId)]){
    currentTeamId = parseInt(ownProps.match.params.teamId);
    ownProps.match.params.teamId = parseInt(ownProps.match.params.teamId);
  } else {
    currentTeamId = state.entities.teams[Object.keys(state.entities.teams)[0]].id;
    if (parseInt(ownProps.match.params.teamId) != currentTeamId) {
      ownProps.history.push(`/teams/${currentTeamId}`);
    }
  }

  return {
    currentUser: state.entities.users[state.session.id],
    teams: state.entities.teams,
    teamId: currentTeamId,
    dropdown: state.ui.dropdown.open,
    sidebar: state.ui.sidebar.open,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal, team) => dispatch(openModal(modal, team)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchTeam: (id) => dispatch(fetchTeam(id)),
    openDropdown: () => dispatch(openDropdown()),
    openSidebar: () => dispatch(openSidebar()),
    deleteTeam: (id) => dispatch(deleteTeam(id)),

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
