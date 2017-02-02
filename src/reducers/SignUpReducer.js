import {
  USER_NAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNUP_VALIDATION_ERROR,
  SIGNUP_VALIDATION_SUCCESS,
  SIGNUP_AUTH_ERROR,
  SIGNUP_AUTH_SUCCESS
} from '../initializers/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  tried: false,
  auth_error: false,
  auth_error_message: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case USER_NAME_CHANGED:
      return { ...state,
        email: action.payload,
        auth_error: false
      };

    case EMAIL_CHANGED:
      return { ...state,
        email: action.payload,
        auth_error: false
      };

    case PASSWORD_CHANGED:
      return {...state,
        password: action.payload,
        auth_error: false
      };

    case SIGNUP_VALIDATION_ERROR:
      return { ...state,
        loading: false,
        tried: true
      };

    case SIGNUP_VALIDATION_SUCCESS:
      return { ...state,
        loading: true,
        tried: true
      };

    case SIGNUP_AUTH_ERROR:
      return { ...state, loading: false, auth_error: true, auth_error_message: action.payload};

    case SIGNUP_AUTH_SUCCESS:
      return { ...state,
        auth_error: false,
        loading: false,
      };

    default:
      return { ...state, INITIAL_STATE };
  }
};