import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

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
    case 'LogIn':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'SignUp':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SignUp' }),
        state
      );
      break;
    case 'TripList':
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