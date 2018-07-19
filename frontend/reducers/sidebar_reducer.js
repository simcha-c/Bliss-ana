import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../actions/sidebar_actions';
import { RECEIVE_NEW_TEAM } from '../actions/team_actions';

export default function sidebarReducer(state = { open: false }, action) {

  switch (action.type) {

    case OPEN_SIDEBAR:
      return { open: true };

    case CLOSE_SIDEBAR:
      return { open: false };

    case RECEIVE_NEW_TEAM:
      return { open: true }

    default:
      return state;
  }
}
