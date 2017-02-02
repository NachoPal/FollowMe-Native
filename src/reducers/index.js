import { combineReducers } from 'redux';
import LogInReducer from './LogInReducer';
import NavReducer from './NavReducer';

export default combineReducers({
  nav: NavReducer,
  login: LogInReducer
});