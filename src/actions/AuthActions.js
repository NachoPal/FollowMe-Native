import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN
} from './types';

export const emailChanged = (text) => {
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

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: USER_LOGIN});

    APIcall.post('log-in', {
     email: email,
     password: password
    })
    .then( response => {
      validate(response.data);
      console.log(toJson(response.data));
    })
    .catch( error => {
      console.log(error);
    });
  };
};