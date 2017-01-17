import {
  EMAIL_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return state;
    default:
      return { ...state, INITIAL_STATE };
  }
};