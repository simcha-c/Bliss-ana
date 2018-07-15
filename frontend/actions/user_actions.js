import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = ({currentUser, teams}) => {
  return {
    type: RECEIVE_USER,
    user: currentUser,
    teams: teams,
  };
};

export const fetchUser = (id) => dispatch => {
  return UserAPIUtil.fetchUser(id).then(
    payload => dispatch(receiveUser(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
