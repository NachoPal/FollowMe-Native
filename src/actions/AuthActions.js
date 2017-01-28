import axios from 'axios';

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
  const url = (__DEV__) ? 'http://api.127.0.0.1/:3000/v1/log-in' : 'api.followme.staging/v1/log-in';
  console.log({email, password});
  return (dispatch) => {
    dispatch({type: USER_LOGIN});
    console.log('Putilla');

    fetch('http://api.followme.staging/v1/log-in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      });

   axios.get('http://192.168.1.36/')
    .then( response => {
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    });
  };
};