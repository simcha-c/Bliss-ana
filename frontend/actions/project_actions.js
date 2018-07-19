import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_NEW_PROJECT = "RECEIVE_NEW_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const receiveProject = ({ project, columns, tasks }) => {
  return {
    type: RECEIVE_NEW_PROJECT,
    project,
    columns,
    tasks,
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
    payload => dispatch(receiveProject(payload))
  );
};

export const createProject = (project) => dispatch => {
  return ProjectAPIUtil.createProject(project).then(
    payload => dispatch(receiveProject(payload))
  );
};

export const updateProject = (project) => dispatch => {
  return ProjectAPIUtil.updateProject(project).then(
    payload => dispatch(receiveProject(payload))
  );
};

export const deleteProject = (id) => dispatch => {
  return ProjectAPIUtil.deleteProject(id).then(
    project => dispatch(removeProject(project))
  );
};
