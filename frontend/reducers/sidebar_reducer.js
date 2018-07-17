import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../actions/sidebar_actions';

export default function sidebarReducer(state = { open: false }, action) {

  switch (action.type) {

    case OPEN_SIDEBAR:
      return { open: true };

    case CLOSE_SIDEBAR:
      return { open: false };

    default:
      return state;
  }
}
