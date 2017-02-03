import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'

import {
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_USER_NAME_CHANGED,
  SIGNUP_VALIDATION_ERROR,
  SIGNUP_VALIDATION_SUCCESS,
  SIGNUP_AUTH_ERROR,
  SIGNUP_AUTH_SUCCESS
} from '../initializers/types';

export const signupEmailChanged = (text) => {
  return {
    type: SIGNUP_EMAIL_CHANGED,
    payload: text
  };
};

export const signupPasswordChanged = (text) => {
  return {
    type: SIGNUP_PASSWORD_CHANGED,
    payload: text
  };
};

export const signupUserNameChanged = (text) => {
  return {
    type: SIGNUP_USER_NAME_CHANGED,
    payload: text
  };
};

export const signupUser = ({userName, email, password}, value) => {
  return (dispatch) => {
    if (value){
      dispatch({type: SIGNUP_VALIDATION_SUCCESS});

      APIcall.post('sign-up', {
        name: userName,
        email: email,
        password: password
      })
        .then( response => {
          if (response.status == 201){
            dispatch({type: SIGNUP_AUTH_SUCCESS});
          }else{
            var message = [];
            Object.keys(response.data.reason).map((field) => {
                if (response.data.reason[field] != undefined){
                  message.push(field + ' ' + response.data.reason[field]);
                }
              }
            );
            dispatch({type: SIGNUP_AUTH_ERROR, payload: message});
          }
          console.log(toJson(response.data));
        })
        .catch( (error) => {
          console.log(error);
        });
    }else{
      dispatch({type: SIGNUP_VALIDATION_ERROR});
    }
  };
};