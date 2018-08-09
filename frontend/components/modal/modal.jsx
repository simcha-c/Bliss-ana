import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/sign_up_form_container';
import CreateTeamFormContainer from '../workspace_form/create_team_form_container';
import EditTeamFormContainer from '../workspace_form/edit_team_form_container';
import AddProjectFormContainer from '../add_project_form/add_project_form_container';
import EditShowTaskContainer from '../tasks/edit_show_task_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return "";
  }
  let component;
  switch (modal) {
    case 'Log In':
      component = <LoginFormContainer />;
      break;
    case 'Sign Up':
      component = <SignupFormContainer />;
      break;
    case 'Create New Workspace':
      component = <CreateTeamFormContainer />;
      break;
    case 'Workspace Settings':
      component = <EditTeamFormContainer />;
      break;
    case 'Add Project':
      component = <AddProjectFormContainer />;
      break;
    case 'Task':
      component = <EditShowTaskContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </ div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
