export function fetchRestaurants(data) {
    return dispatch => {
      dispatch(fetchRestaurantsBegin());
      return fetch(`https://opentable.herokuapp.com/api/restaurants?city=${data.city}&name=${data.name}`)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchRestaurantsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchRestaurantsFailure(error)));
    };
  }

export const FETCH_RESTAURANTS_BEGIN   = 'FETCH_RESTAURANTS_BEGIN';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';

export const fetchRestaurantsBegin = (restaurantName) => ({
  type: FETCH_RESTAURANTS_BEGIN,
  restaurantName
});

export const fetchRestaurantsSuccess = restaurants => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload: { restaurants }
});

export const fetchRestaurantsFailure = error => ({
  type: FETCH_RESTAURANTS_FAILURE,
  payload: { error }
});

