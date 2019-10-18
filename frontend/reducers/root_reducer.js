import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import randoReducer from './rando_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer,
  rando: randoReducer,
});

export default rootReducer;
