import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'
import { AsyncStorage } from 'react-native'

import {
  TRIP_INDEX_SUCCESS
} from '../initializers/types';

export const fetchTripIndex = (text) => {
  return (dispatch) => {
    AsyncStorage.getItem('currentUser', (err, result) => {
      console.log(result);
      const userId = result.id;

      APIcall.get( `/user/${userId}/trips`)
        .then( response => {
            dispatch({type: TRIP_INDEX_SUCCESS, payload: response.data}); //RECOGER BIEN LOS DATOS AQUI!!!

          }
        )
        .catch( error =>{
          console.log(error)
        })
    });

    return {
      type: TRIP_INDEX_SUCCESS,
      payload: text
    };
  }
};
