import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import {
  LogInScreen,
  SignUpScreen,
  TripListScreen,
  DayListScreen,
  DayScreen
} from '../screens';

export const AppNavigator = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    title: 'LogIn'
  },
  SignUp: {
    screen: SignUpScreen,
    title: 'SignUp'
  },
  TripList: {
    screen: TripListScreen,
    title: 'TripList'
  },
  DayList: {
    screen: DayListScreen,
    title: 'DayList'
  },
  Day: {
    screen: DayScreen,
    title: 'Day'
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);