import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS
} from './types';

export const emailChanged = (text) => {
  //console.log(text);
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({email, password}, value) => {
  console.log(value);
  return (dispatch) => {
    if (value){
      console.log('Exito');
      dispatch({type: USER_LOGIN_SUCCESS});

      APIcall.post('log-in', {
        email: email,
        password: password
      })
        .then( response => {
          console.log(toJson(response.data));
        })
        .catch( error => {
          console.log(error);
        });
    }else{
      console.log('Fail');
      dispatch({type: USER_LOGIN_ERROR});
    }
  };
};