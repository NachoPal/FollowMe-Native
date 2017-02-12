import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'
import { AsyncStorage } from 'react-native'
//import {  JsonApiDataStore } from 'jsonapi-datastore'

import {
  TRIP_INDEX_SUCCESS
} from '../initializers/types';

export const fetchTripIndex = (user) => {
  return (dispatch) => {

    APIcall.defaults.headers.common['Authorization'] = `Bearer ${user.auth_token}`;
    APIcall.get( `/user/${user.id}/trips`)
      .then( response => {
          console.log(toJson(response.data));

          dispatch({type: TRIP_INDEX_SUCCESS, payload: response.data.trips});
        }
      )
      .catch( error =>{
        console.log(error)
      })

  }
};
