import { NavigationExperimental } from 'react-native-deprecated-custom-components'

import {
  PUSH_ROUTE,
  POP_ROUTE
} from '../initializers/types';

const INITIAL_STATE = {
  index: 0,
  routes: [{key: 'log_in'}]
};

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

export default  (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case PUSH_ROUTE:
      return NavigationStateUtils.push(state, action.payload);

    case POP_ROUTE:
      return NavigationStateUtils.pop(state);

    default:
      return { ...state, INITIAL_STATE }
  }
};