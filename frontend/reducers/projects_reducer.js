import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
// import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_NEW_COLUMN, REMOVE_COLUMN } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let project;

  switch (action.type) {

  case RECEIVE_NEW_PROJECT:
    project = {[action.project.id]: action.project};
    return merge(newState, project);

  case RECEIVE_NEW_TEAM:
    newState = merge({}, state, action.projects);
    return newState;

  case RECEIVE_NEW_COLUMN:
    project = {[action.project.id]: action.project};
    return merge(newState, project);

  // case RECEIVE_NEW_COLUMN:
  //   project = newState[action.column.project_id];
  //   project.column_ids.push(action.column.id);
  //   newState[project.id] = project;
  //   return newState;

  case REMOVE_COLUMN:
    project = newState[action.column.project_id];
    const idx = project.column_ids.indexOf(action.column.id);
    const columnIds = project.column_ids;
    const columnArr = columnIds.slice(0,idx).concat(columnIds.slice(idx+1, columnIds.length+1));
    project.column_ids = columnArr;
    return newState;

  case REMOVE_PROJECT:
    newState = merge({}, state);
    delete newState[action.id];
    return newState;

  case LOGOUT_CURRENT_USER:
    return {};

    default:
      return state;
  }
  return state;
};

export default projectsReducer;
