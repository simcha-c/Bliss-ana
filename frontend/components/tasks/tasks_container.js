import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import Tasks from './tasks';
import { updateTask, deleteTask } from '../../actions/task_actions';
import { fetchProject } from '../../actions/project_actions';

const mapState = (state, props) => {
  const task = (props.task === undefined) ? {assignee_id: 0, completer_id: 0} : props.task;
  const assignee = state.entities.users[task.assignee_id] || {};
  let initials;
  if (assignee.first) {
    initials = `${assignee.first[0]}${assignee.last[0]}`;
  } else {
    initials = "";
  }

  return {
    props: props.props,
    task,
    assignee,
    initials,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
    fetchProject: (task) => dispatch(fetchProject(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Tasks));
