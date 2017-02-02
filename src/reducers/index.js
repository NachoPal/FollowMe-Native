import { combineReducers } from 'redux';
import LogInReducer from './LogInReducer';
import SignUpReducer from './SignUpReducer';
import NavReducer from './NavReducer';

export default combineReducers({
  nav: NavReducer,
  login: LogInReducer,
  signup: SignUpReducer
});