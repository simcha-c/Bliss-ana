import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_NEW_TEAM = "RECEIVE_NEW_TEAM";
export const REMOVE_TEAM = "REMOVE_TEAM";

export const receiveTeam = ({ members, team, projects }) => {
  return {
    type: RECEIVE_NEW_TEAM,
    members,
    team,
    projects,
  };
};

export const removeTeam = (id) => {
  return {
    type: REMOVE_TEAM,
    id,
  };
};

export const fetchTeam = (id) => dispatch => {
  return TeamAPIUtil.fetchTeam(id).then(
    members => dispatch(receiveTeam(members))
  );
};

export const createTeam = (team) => dispatch => {
  return TeamAPIUtil.createTeam(team).then(
    members => dispatch(receiveTeam(members))
  );
};

export const updateTeam = (team) => dispatch => {
  return TeamAPIUtil.updateTeam(team).then(
    members => dispatch(receiveTeam(members))
  );
};

export const deleteTeam = (id) => dispatch => {
  return TeamAPIUtil.deleteTeam(id).then(
    () => dispatch(removeTeam(id))
  );
};
