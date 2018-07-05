import config from '../../config';
import getToken from '../auth/getToken';

export const PIZZAS_REQUEST = 'PIZZAS_REQUEST';
export const PIZZAS_SUCCESS = 'PIZZAS_SUCCESS';
export const PIZZAS_FAILURE = 'PIZZAS_FAILURE';

export const ADD_PIZZA_REQUEST = 'ADD_PIZZA_REQUEST';
export const ADD_PIZZA_SUCCESS = 'ADD_PIZZA_SUCCESS';
export const ADD_PIZZA_FAILURE = 'ADD_PIZZA_FAILURE';

export const getPizzas = offset => ({
  API_CALL: {
    endpoint: `${config.ENDPOINTS.PIZZAS}?offset=${offset || 0}`,
    method: 'GET',
    types: [PIZZAS_REQUEST, PIZZAS_SUCCESS, PIZZAS_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
  extraParams: offset,
});


export const addPizza = phone => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PIZZAS,
    method: 'POST',
    types: [ADD_PIZZA_REQUEST, ADD_PIZZA_SUCCESS, ADD_PIZZA_FAILURE],
    data: JSON.stringify({ phone }),
    headers: { Authorization: `Bearer ${getToken().run()}` },
    // nextActions: [getPhones, getTotal],
  },
});
