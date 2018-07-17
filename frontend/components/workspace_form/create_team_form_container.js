import { connect } from 'react-redux';
import React from 'react';
import { createNewTeam } from '../../actions/team_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import TeamForm from './team_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Create Your Workspace',
    form: state.ui.form,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (team) => dispatch(createNewTeam(team)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
