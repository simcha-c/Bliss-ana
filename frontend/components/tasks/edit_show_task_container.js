import { connect } from 'react-redux';
import React from 'react';
import { createProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import EditShowTask from './edit_show_task';

const mapStateToProps = (state) => {
  return {
    formType: 'Task',
    task: state.ui.form,
    users: state.entities.users,
    currentUser: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditShowTask));
