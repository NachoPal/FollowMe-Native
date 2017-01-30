import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: false,
  loading: false,
  validation: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case USER_LOGIN_ERROR:
      return { ...state, error: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, error: false };
    default:
      return { ...state, INITIAL_STATE };
  }
};