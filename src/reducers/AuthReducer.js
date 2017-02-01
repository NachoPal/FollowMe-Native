import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
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
  email_error_message: '',
  password_error_message: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGED:
      return { ...state,
        email: action.payload,
      };

    case PASSWORD_CHANGED:
      return {...state,
        password: action.payload,
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
      var nextState = { ...state,
        auth_error: true,
        email_error_message: action.payload,
        password_error_message: action.payload,
        loading: false
      };

      if (action.payload.hasOwnProperty('email')){
        return { ...nextState, email_error_message: action.payload}
      }
      if (action.payload.hasOwnProperty('password')){
        return { ...nextState, password_error_message: action.payload}
      }

      return { ...state,
        auth_error: true,
        email_error_message: action.payload,
        password_error_message: action.payload,
        loading: false
      };

    case LOGIN_AUTH_SUCCESS:
      return { ...state,
        auth_error: false,
        loading: false,
      };

    default:
      return { ...state, INITIAL_STATE };
  }
};