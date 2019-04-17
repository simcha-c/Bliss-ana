import { connect } from 'react-redux';
import MySettings from './my_settings.jsx';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal()) 
  };
};

export default connect(msp, mdp)(MySettings);