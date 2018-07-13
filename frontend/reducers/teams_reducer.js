import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      return merge({}, {[action.user.id]: action.user});

    default:
      return state;
  }
  return state;
};

export default teamsReducer;
