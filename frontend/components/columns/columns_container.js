import { connect } from 'react-redux';
import { fetchProject, createProject, updateProject, deleteProject } from '../../actions/project_actions';
import { createColumn, updateColumn, deleteColumn } from '../../actions/column_actions';
// import { fetchUser } from '../../actions/user_actions';
// import { fetchTeam } from '../../actions/team_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { closeSidebar } from '../../actions/sidebar_actions';
import Columns from './columns';

const mapState = (state, ownProps) => {
  const team = state.entities.teams[ownProps.match.params.teamId] || { member_ids: [], project_ids: [] };
  team.project_ids = team.project_ids || [];
  //
  // const users = team.member_ids.map((member_id, idx) => {
  //   return state.entities.users[member_id] || { first: " ", last: " " };
  // });

  const projects = team.project_ids.map(project_id => {
    return state.entities.projects[project_id] || {};
  });

  const project = state.entities.projects[ownProps.match.params.projectId] || {column_ids: []};

  let columns = Object.values(state.entities.columns);
  columns = (columns.length < 1) ? [] : columns;

  return {
    currentUser: state.entities.users[state.session.id],
    project,
    projects, // projects as array
    columns,
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
    // openModal: (formType) => dispatch(openModal(formType)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Columns));
