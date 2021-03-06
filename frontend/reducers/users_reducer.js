import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_TEAM } from '../actions/team_actions';
import { RECEIVE_MEMBERSHIPS } from '../actions/membership_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {

    // case RECEIVE_CURRENT_USER:
    //   return merge({}, {[action.user.id]: action.user});
    case RECEIVE_USER:
      const user = { [action.user.id]: action.user };
      return merge({}, state, user);
    case RECEIVE_MEMBERSHIPS:
      return merge({}, state, action.user);

    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;

    case RECEIVE_NEW_TEAM:
      return merge({}, state, action.members);

    case LOGOUT_CURRENT_USER:
      return {};

  default:
    return state;
  }
};

export default usersReducer;
