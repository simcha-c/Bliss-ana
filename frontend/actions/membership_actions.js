import * as MembershipAPIUtil from '../util/membership_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = ({ currentUser, teams }) => {
  return {
    type: RECEIVE_USER,
    user: currentUser,
    teams: teams,
  };
};

export const updateMembership = (user) => dispatch => {
  return MembershipAPIUtil.updateMembership(user).then(response => { 
      console.log(response);
      debugger
    }
    // payload => dispatch(receiveUser(payload)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
