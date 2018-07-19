import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
// import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_NEW_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let project;

  switch (action.type) {

  case RECEIVE_NEW_PROJECT:
    newState[action.project.id] = action.project
    return newState;

  case RECEIVE_NEW_TEAM:
    newState = merge({}, state, action.projects);
    return newState;

  case RECEIVE_NEW_COLUMN:
    project = {[action.project.id]: action.project};
    return merge(newState, project);

  case REMOVE_COLUMN:
    newState[action.id.project.id] = action.id.project;
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
