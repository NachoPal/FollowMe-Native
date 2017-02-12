import {
  PUSH_ROUTE,
  POP_ROUTE
} from '../initializers/types';

export const push = (route) => {
  return {
    type: PUSH_ROUTE,
    payload: route,
  };
};

export const pop = () => {
  return {
    type: POP_ROUTE,
  };
};