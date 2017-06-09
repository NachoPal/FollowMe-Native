import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'
import { AsyncStorage } from 'react-native'

import {
  LOGIN_TO_SIGNUP,
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_VALIDATION_ERROR,
  LOGIN_VALIDATION_SUCCESS,
  LOGIN_AUTH_ERROR,
  LOGIN_AUTH_SUCCESS
} from '../initializers/types';

export const loginToSignUp = () => {
  return {
    type: LOGIN_TO_SIGNUP,
    payload: ''
  };
};

export const loginEmailChanged = (text) => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text
  };
};

export const loginPasswordChanged = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({email, password}, value) => {
  return (dispatch) => {
    if (value){
      dispatch({type: LOGIN_VALIDATION_SUCCESS});

      APIcall.post('log-in', {
        email: email,
        password: password
      })
        .then( response => {
          if (response.data.status == 'success'){
            const user = Object.assign(response.data.user, {auth_token: response.data.auth_token});

            //AsyncStorage.setItem('currentUser', JSON.stringify(user));

            dispatch({
              type: LOGIN_AUTH_SUCCESS,
              payload: user
            });
          }else{
            var errorMessage = response.data.reason;
            dispatch({type: LOGIN_AUTH_ERROR, payload: errorMessage});
          }
          console.log(toJson(response.data));
        })
        .catch( (error) => {
          console.log(error);
        });
    }else{
      dispatch({type: LOGIN_VALIDATION_ERROR});
    }
  };
};