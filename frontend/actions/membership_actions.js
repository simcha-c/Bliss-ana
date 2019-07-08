import * as MembershipAPIUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";

export const receiveMemberships = ({ members, team, team_memberships }) => {
  return {
    type: RECEIVE_MEMBERSHIPS,
    members,
    team_memberships,
  };
};

export const updateMembership = (user) => dispatch => {
  return MembershipAPIUtil.updateMembership(user).then(payload => {
    dispatch(receiveMemberships(payload));
  }
  );
};
