import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import formReducer from './form_reducer';
import dropdownReducer from './dropdown_reducer';

export default combineReducers({
  modal: modalReducer,
  form: formReducer,
  dropdown: dropdownReducer,
});
