import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_NEW_PROJECT = "RECEIVE_NEW_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const receiveProject = ({ project, columns }) => {
  return {
    type: RECEIVE_NEW_PROJECT,
    project,
    columns
  };
};

export const removeProject = (project) => {
  return {
    type: REMOVE_PROJECT,
    project,
  };
};

export const fetchProject = (id) => dispatch => {
  return ProjectAPIUtil.fetchProject(id).then(
    project => dispatch(receiveProject(project)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createProject = (project) => dispatch => {
  return ProjectAPIUtil.createProject(project).then(
    project => dispatch(receiveProject(project)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateProject = (project) => dispatch => {
  return ProjectAPIUtil.updateProject(project).then(
    project => dispatch(receiveProject(project)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteProject = (id) => dispatch => {
  return ProjectAPIUtil.deleteProject(id).then(
    id => dispatch(removeProject(id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
