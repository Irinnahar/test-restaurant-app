// const INITIAL_STATE = {
//     currentRestaurant: null
// }

// const restaurantReducer = (state = INITIAL_STATE, action) => {
//     switch(action.type){
//         case 'SET_CURRENT_RESTAURANT': return {
//             ...state,
//             currentRestaurant: action.payload
//         }

//         default: 
//             return state
//     }
// }

// export default restaurantReducer;

import {
    FETCH_RESTAURANTS_BEGIN,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE
  } from './restaurant-action';
  
  const initialState = {
    restaurants: [],
    loading: false,
    error: null
  };
  
  export default function restaurantReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_RESTAURANTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_RESTAURANTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.restaurants
        };
  
      case FETCH_RESTAURANTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }