import { RECEIVE_NEW_TEAM } from '../actions/team_actions';

const teamMembershipsReducer = (state = {}, action) => {
  switch (action.type) {

    case RECEIVE_NEW_TEAM:
      return Object.assign({}, state, action.team_memberships);

    default:
      return state;
  }
};

export default teamMembershipsReducer;