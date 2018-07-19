import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
// import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_NEW_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import { RECEIVE_NEW_TASK, REMOVE_TASK } from '../actions/task_actions';

import { merge } from 'lodash';

const columnsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {

  case RECEIVE_NEW_PROJECT:
  case RECEIVE_NEW_COLUMN:
  case RECEIVE_NEW_TASK:
    return merge({}, state, action.columns);

  case REMOVE_COLUMN:
    delete newState[action.column.id];
    return newState;

  case REMOVE_PROJECT:
    delete newState[action.id];
    return newState;

  case LOGOUT_CURRENT_USER:
    return {};

    default:
      return state;
  }
  return state;
};

export default columnsReducer;
