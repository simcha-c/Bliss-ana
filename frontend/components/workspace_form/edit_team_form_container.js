import { connect } from 'react-redux';
import React from 'react';
import { updateTeam } from '../../actions/team_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import TeamForm from './team_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Workspace Settings',
    form: state.ui.form,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (team) => dispatch(updateTeam(team)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamForm));
