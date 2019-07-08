import { connect } from 'react-redux';
import MySettings from './my_settings.jsx';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { updateMembership } from '../../actions/membership_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const teamId = ownProps.location.pathname.match(/\/([^\/]+)\/?$/)[1];
  const teamMembershipId = currentUser.team_membership_ids[teamId];
  const teamMembershipInfo = state.entities.teamMemberships[teamMembershipId];

  return {
    currentUser,
    teamMembershipInfo,
  };
};

const mdp = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    updateMembership: (member) => dispatch(updateMembership(member)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(msp, mdp)(MySettings));