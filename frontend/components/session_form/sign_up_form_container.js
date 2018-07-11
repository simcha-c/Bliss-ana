import { connect } from 'react-redux';
import React from 'react';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    otherFormText: "Have an account?",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <div className="other-form" onClick={() => dispatch(openModal('Log In'))}>
        Log In
      </div>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
