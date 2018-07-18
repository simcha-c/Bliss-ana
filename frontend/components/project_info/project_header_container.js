import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectHeader from './project_header';

const mapState = (state, ownProps) => {

  const project = state.entities.projects[ownProps.match.params.projectId] || {};

  return {
    currentUser: state.entities.users[state.session.id],
    project,
  };
};


export default withRouter(connect(mapState)(ProjectHeader));
