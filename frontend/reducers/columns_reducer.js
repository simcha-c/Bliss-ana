import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
import { RECEIVE_NEW_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_NEW_COLUMN, REMOVE_COLUMN } from '../actions/column_actions';
import { RECEIVE_NEW_TASK, RECEIVE_UPDATED_TASK, RECEIVE_UPDATED_ORDER, REMOVE_TASK } from '../actions/task_actions';

import { merge } from 'lodash';

const columnsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let newCol;

  switch (action.type) {

  case RECEIVE_NEW_PROJECT:
    return merge(newState, action.columns);

  case RECEIVE_NEW_COLUMN:
  case RECEIVE_NEW_TASK:
    return merge(newState, action.columns);

  case RECEIVE_UPDATED_ORDER:
    const columns = action.payload.columns;
    Object.keys(columns).forEach(colIdx => {
      newState[parseInt(colIdx)] = columns[parseInt(colIdx)];
    });
    // debugger
    return newState;

  case REMOVE_TASK:
    newState[Object.keys(action.column)[0]] = Object.values(action.column)[0];
    return newState;

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
};

export default columnsReducer;
