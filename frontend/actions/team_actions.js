import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_NEW_TEAM = "RECEIVE_NEW_TEAM";

export const receiveTeam = ({ members }) => {
  return {
    type: RECEIVE_NEW_TEAM,
    members,
  };
};

export const fetchTeam = (id) => dispatch => {
  return TeamAPIUtil.fetchTeam(id).then(
    members => dispatch(receiveTeam(members)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createNewTeam = (team) => dispatch => {
  return TeamAPIUtil.createTeam(team).then(
    members => dispatch(receiveTeam(members)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateTeam = (team) => dispatch => {
  return TeamAPIUtil.updateTeam(team).then(
    members => dispatch(receiveTeam(members)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
