// should return true or false

import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';

export default function dropdownReducer(state = { open: false }, action) {

  switch (action.type) {

    case OPEN_DROPDOWN:
      return { open: true };

    case CLOSE_DROPDOWN:
      return { open: false };

    default:
      return state;
  }
}
