import { connect } from 'react-redux';
import { fetchProject, createProject, updateProject, deleteProject } from '../../actions/project_actions';
import { createColumn, updateColumn, deleteColumn, updateOrderFrontEnd } from '../../actions/column_actions';
import { createTask, updateTaskOrder } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { closeSidebar } from '../../actions/sidebar_actions';
import Columns from './columns';

const mapState = (state, ownProps) => {
  const team = state.entities.teams[ownProps.match.params.teamId] || { member_ids: [], project_ids: [] };
  team.project_ids = team.project_ids || [];

  const projects = team.project_ids.map(project_id => {
    return state.entities.projects[project_id] || {};
  });

  const project = state.entities.projects[ownProps.match.params.projectId] || { column_ids: [] };

  let columns = project.column_ids.map(columnId => {
    return state.entities.columns[columnId] || undefined ;
  });

  columns = (columns.includes(undefined) || columns.length < 1) ? [{ id: 0 }] : columns;

  return {
    currentUser: state.entities.users[state.session.id],
    project,
    projects, // projects as array
    columns,
    allColumns: state.entities.columns,
    tasks: state.entities.tasks,
    projectId: parseInt(ownProps.match.params.projectId),
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchTeam: (id) => dispatch(fetchTeam(id)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    createColumn: (column) => dispatch(createColumn(column)),
    updateColumn: (id) => dispatch(updateColumn(id)),
    deleteColumn: (id) => dispatch(deleteColumn(id)),
    closeSidebar: () => dispatch(closeSidebar()),
    createTask: (task) => dispatch(createTask(task)),
    updateTaskOrder: (orderInfo) => dispatch(updateTaskOrder(orderInfo)),
    updateOrderFrontEnd: (payload) => dispatch(updateOrderFrontEnd(payload)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Columns));
