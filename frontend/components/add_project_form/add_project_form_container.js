import { connect } from 'react-redux';
import React from 'react';
import { createProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import AddProjectForm from './add_project_form';

const mapStateToProps = (state, ownProps) => {

  return {
    errors: state.errors.session,
    formType: 'Add Project',
    form: state.ui.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProjectForm));
