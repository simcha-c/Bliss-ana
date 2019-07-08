import { RECEIVE_NEW_TEAM } from '../actions/team_actions';
import { RECEIVE_MEMBERSHIPS } from '../actions/membership_actions';

const teamMembershipsReducer = (state = {}, action) => {
  switch (action.type) {

    case RECEIVE_NEW_TEAM:
    case RECEIVE_MEMBERSHIPS:
      return Object.assign({}, state, action.team_memberships);

    default:
      return state;
  }
};

export default teamMembershipsReducer;