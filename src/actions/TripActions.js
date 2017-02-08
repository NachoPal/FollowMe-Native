import { APIcall } from '../initializers/conts'
import { toJson } from '../helpers/methods'
import { AsyncStorage } from 'react-native'
//import {  JsonApiDataStore } from 'jsonapi-datastore'

import {
  TRIP_INDEX_SUCCESS
} from '../initializers/types';

export const fetchTripIndex = () => {
  return (dispatch) => {
    AsyncStorage.getItem('currentUser', (err, result) => {
      console.log(result);

      const userId = JSON.parse(result).id;
      const token = JSON.parse(result).auth_token;

      APIcall.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      APIcall.get( `/user/${userId}/trips`)
        .then( response => {
          console.log(toJson(response.data));
          var store = JsonApiDataStore();
          store.sync(response.data);
          var trips = store.findAll('trip');
          console.log(toJson(trips));
            dispatch({type: TRIP_INDEX_SUCCESS, payload: response.data}); //RECOGER BIEN LOS DATOS AQUI!!!
          }
        )
        .catch( error =>{
          console.log(error)
        })
    });
  }
};
