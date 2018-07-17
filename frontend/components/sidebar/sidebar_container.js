import { connect } from 'react-redux';
import { fetchProject, createProject, updateProject, deleteProject } from '../../actions/project_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchTeam } from '../../actions/team_actions';
// import { openModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { closeSidebar } from '../../actions/sidebar_actions';
import Sidebar from './sidebar';

const mapState = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    team: state.entities.teams[ownProps.match.params.teamId],
    teams: state.entities.teams,
    projects: state.entities.projects,
    sidebar: state.ui.sidebar.open,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchTeam: (id) => dispatch(fetchTeam(id)),
    createProject: (project) => dispatch(createProject(project)),
    updateProject: (project) => dispatch(updateProject(project)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    closeSidebar: () => dispatch(closeSidebar()),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Sidebar));
