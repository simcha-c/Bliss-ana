import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import teamReducer from './teams_reducer';
import projectReducer from './projects_reducer';
import columnReducer from './columns_reducer';
import taskReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  teams: teamReducer,
  projects: projectReducer,
  columns: columnReducer,
  tasks: taskReducer,
});

export default entitiesReducer;
