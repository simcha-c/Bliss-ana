import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_TEAM, REMOVE_TEAM } from '../actions/team_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_NEW_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let team;

  switch (action.type) {

  case RECEIVE_CURRENT_USER:
    return merge({}, action.teams);

  case RECEIVE_USER:
    return merge({}, action.teams);

  case RECEIVE_NEW_TEAM:
    newState[action.team.id] = action.team;
    return newState;

  case REMOVE_TEAM:
    delete newState[action.id];
    return newState;

  case RECEIVE_NEW_PROJECT:
    team = newState[action.project.team_id];
    if (team.project_ids.includes(action.project.id)) {

    } else {
      team.project_ids.push(action.project.id);
      newState[team.id] = team;
    }
    return newState;

  case REMOVE_PROJECT:
    team = newState[action.project.project.team_id];
    const idx = team.project_ids.indexOf(action.project.project.id);
    const projectIds = team.project_ids;
    const projectArr = projectIds.slice(0,idx).concat(projectIds.slice(idx+1, projectIds.length+1));
    team.project_ids = projectArr;
    return newState;

  case LOGOUT_CURRENT_USER:
    return {};

    default:
      return state;
  }
  return state;
};

export default teamsReducer;
