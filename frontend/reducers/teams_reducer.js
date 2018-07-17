import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {

  case RECEIVE_CURRENT_USER:
    return merge({}, action.teams);

  case RECEIVE_USER:
    return merge({}, action.teams);

  case RECEIVE_NEW_TEAM:
    newState = merge({}, state);
    newState[action.team.id] = action.team;
    return newState;

  case REMOVE_TEAM:
    nextState = merge({}, state);
    delete nextState[action.id];
    return nextState;

  case LOGOUT_CURRENT_USER:
    return {};

    default:
      return state;
  }
  return state;
};

export default teamsReducer;
