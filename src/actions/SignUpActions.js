import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'

import {
  USER_NAME_CHANGED,
  SIGNUP_VALIDATION_ERROR,
  SIGNUP_VALIDATION_SUCCESS,
  SIGNUP_AUTH_ERROR,
  SIGNUP_AUTH_SUCCESS
} from '../initializers/types';



export const userNameChanged = (text) => {
  return {
    type: USER_NAME_CHANGED,
    payload: text
  };
};

export const signupUser = ({userName, email, password}, value) => {
  return {
    type: SIGNUP_VALIDATION_ERROR
  };
  /*return (dispatch) => {
    if (value){
      dispatch({type: LOGIN_VALIDATION_SUCCESS});

      APIcall.post('log-in', {
        email: email,
        password: password
      })
        .then( response => {
          if (response.data.status == 'success'){
            dispatch({type: LOGIN_AUTH_SUCCESS});
          }else{
            var message = '';
            Object.keys(response.data.reason).map((field) => {
                if (response.data.reason[field] != undefined){
                  message = field + ' ' + response.data.reason[field]
                }
              }
            );
            dispatch({type: LOGIN_AUTH_ERROR, payload: message});
          }
          console.log(toJson(response.data));
        })
        .catch( (error) => {
          console.log(error);
        });
    }else{
      dispatch({type: LOGIN_VALIDATION_ERROR});
    }
  };*/
};