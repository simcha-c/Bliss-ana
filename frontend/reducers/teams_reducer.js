import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM } from '../actions/team_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

  case RECEIVE_CURRENT_USER:
    return merge({}, action.teams);

  case RECEIVE_USER:
    return merge({}, action.teams)

  case LOGOUT_CURRENT_USER:
    return {};

    default:
      return state;
  }
  return state;
};

export default teamsReducer;
