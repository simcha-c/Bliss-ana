import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
// import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {

  case RECEIVE_NEW_PROJECT:
    return merge({}, state, action.project);

  case RECEIVE_NEW_TEAM:
    newState = merge({}, state, action.projects);
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
