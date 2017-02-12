import {
  TRIP_INDEX_SUCCESS
} from '../initializers/types';

const INITIAL_STATE = {
  trips: [{name: '', description: ''}],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case TRIP_INDEX_SUCCESS:
      return { ...state, trips: action.payload, loading: false};
    default:
      return { ...state, INITIAL_STATE };
  }
};