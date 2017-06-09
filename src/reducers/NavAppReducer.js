import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

import {
  LOGIN_TO_SIGNUP,
  LOGIN_AUTH_SUCCESS,
  SIGNUP_AUTH_SUCCESS
} from '../initializers/types';

const logInAction = AppNavigator.router.getActionForPathAndParams('LogIn');
const signUpAction = AppNavigator.router.getActionForPathAndParams('SignUp');
const tripListAction = AppNavigator.router.getActionForPathAndParams('TripList');
const dayListAction = AppNavigator.router.getActionForPathAndParams('DayList');
const dayAction = AppNavigator.router.getActionForPathAndParams('Day');

const INITIAL_STATE = AppNavigator.router.getStateForAction(
  logInAction,
  signUpAction,
  tripListAction,
  dayListAction,
  dayAction
);

export default (state = INITIAL_STATE, action) => {
  var nextState;

  switch (action.type) {
    case LOGIN_TO_SIGNUP:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'LogIn' }),
        state
      );
      break;
    case 'SignUp':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SignUp' }),
        state
      );
      break;
    case (LOGIN_AUTH_SUCCESS || SIGNUP_AUTH_SUCCESS):
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'TripList' }),
        state
      );
      break;
    case 'DayList':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'DayList' }),
        state
      );
      break;
    case 'Day':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Day' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};