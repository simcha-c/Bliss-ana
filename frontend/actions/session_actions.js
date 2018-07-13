export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import * as SessionAPIUtil from './../util/session_api_util';

export const receiveCurrentUser = ({currentUser, teams}) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser,
    teams
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors= (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user).then(
    (payload) => dispatch(receiveCurrentUser(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => {
  return dispatch => {
    return SessionAPIUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return SessionAPIUtil.signup(user)
      .then((payload) => {return dispatch(receiveCurrentUser(payload));},
      (errors) => {return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};
