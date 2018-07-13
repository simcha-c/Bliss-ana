import { combineReducers } from 'redux';
import userReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  teams: teamReducer,
});

export default entitiesReducer;
