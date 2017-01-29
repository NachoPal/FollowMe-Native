import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  validation: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case USER_LOGIN:
      console.log()
      return {  ...state, INITIAL_STATE };
    default:
      return { ...state, INITIAL_STATE };
  }
};