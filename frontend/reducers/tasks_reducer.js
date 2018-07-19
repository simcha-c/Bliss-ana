import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
// import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_NEW_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import { RECEIVE_NEW_TASK, REMOVE_TASK } from '../actions/task_actions';
import { merge } from 'lodash';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {

  case RECEIVE_NEW_PROJECT:
  case RECEIVE_NEW_COLUMN:
    return merge({}, newState, action.tasks);

  case REMOVE_PROJECT:
  case REMOVE_COLUMN:
    delete newState[action.tasks.id];
    return newState;

  case LOGOUT_CURRENT_USER:
    return {};

    default:
      return state;
  }

};

export default tasksReducer;
