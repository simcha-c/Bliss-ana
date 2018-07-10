import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {

    case RECEIVE_SESSION_ERRORS:
      state.push({ errors: action.errors });
      return state;
      
    case RECEIVE_CURRENT_USER:
      return [];

    default:
      return state;
  }
};

export default sessionErrorsReducer;
