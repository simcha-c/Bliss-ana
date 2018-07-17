import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import teamReducer from './teams_reducer';
import projectReducer from './projects_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  teams: teamReducer,
  projects: projectReducer,
});

export default entitiesReducer;
