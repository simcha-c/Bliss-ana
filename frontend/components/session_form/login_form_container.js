import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    otherFormText: "Don't have an account?",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <div className="other-form" onClick={() => dispatch(openModal('Sign Up'))}>
        Sign Up
      </div>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
