import { OPEN_MODAL} from '../actions/modal_actions';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';

const formReducer = (state = {}, action) => {
  switch (action.type) {
    
    case OPEN_MODAL:
      return merge({}, action.state);

    case RECEIVE_CURRENT_USER:
      return {};

    default:
      return state;
  }
};

export default formReducer;
