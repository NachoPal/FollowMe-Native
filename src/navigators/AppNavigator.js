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
  LogIn: { screen: LogInScreen },
  SignUp: { screen: SignUpScreen },
  TripList: { screen: TripListScreen },
  DayList: { screen: DayListScreen },
  Day: { screen: DayScreen },
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