import { connect } from 'react-redux';
import React from 'react';
import { createNewTeam } from '../../actions/team_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import TeamForm from './team_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Create Your Workspace',
    form: state.ui.form,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (team) => dispatch(createNewTeam(team)).then((data) => ownProps.history.push(`/teams/${data.team.id}`)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamForm));
