import { combineReducers } from 'redux';
import LogInReducer from './LogInReducer';
import SignUpReducer from './SignUpReducer';
import NavReducer from './NavReducer';
import TripReducer from './TripReducer';

export default combineReducers({
  nav: NavReducer,
  login: LogInReducer,
  signup: SignUpReducer,
  trip: TripReducer
});