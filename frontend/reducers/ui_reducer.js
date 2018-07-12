import { combineReducers } from 'redux';
import formReducer from './form_reducer';


import modalReducer from './modal_reducer';

export default combineReducers({
  modal: modalReducer,
  form: formReducer
});
