import { combineReducers } from 'redux';
import LogInReducer from './LogInReducer';
import SignUpReducer from './SignUpReducer';
import NavAppReducer from './NavAppReducer';
import TripReducer from './TripReducer';

export default combineReducers({
  nav: NavAppReducer,
  login: LogInReducer,
  signup: SignUpReducer,
  trip: TripReducer
});