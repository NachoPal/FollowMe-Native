import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_VALIDATION_ERROR,
  LOGIN_VALIDATION_SUCCESS,
  LOGIN_AUTH_ERROR,
  LOGIN_AUTH_SUCCESS
} from '../initializers/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  tried: false,
  auth_error: false,
  auth_error_message: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOGIN_EMAIL_CHANGED:
      return { ...state,
        email: action.payload,
        auth_error: false
      };

    case LOGIN_PASSWORD_CHANGED:
      return {...state,
        password: action.payload,
        auth_error: false
      };

    case LOGIN_VALIDATION_ERROR:
      return { ...state,
        loading: false,
        tried: true
      };

    case LOGIN_VALIDATION_SUCCESS:
      return { ...state,
        loading: true,
        tried: true
      };

    case LOGIN_AUTH_ERROR:
      return { ...state,
        loading: false,
        auth_error: true,
        auth_error_message: action.payload
    };

    case LOGIN_AUTH_SUCCESS:
      return { ...state,
        auth_error: false,
        loading: false,
        user: action.payload
      };

    default:
      return { ...state, INITIAL_STATE };
  }
};