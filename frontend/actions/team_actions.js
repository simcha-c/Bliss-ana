import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_NEW_TEAM = "RECEIVE_NEW_TEAM";
export const REMOVE_TEAM = "REMOVE_TEAM";

export const receiveTeam = ({ members, team }) => {
  return {
    type: RECEIVE_NEW_TEAM,
    members,
    team
  };
};

export const removeTeam = ({ id }) => {
  return {
    type: REMOVE_TEAM,
    id,
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

export const deleteTeam = (id) => dispatch => {
  return TeamAPIUtil.deleteTeam(id).then(
    id => dispatch(removeTeam(id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
}
