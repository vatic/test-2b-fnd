import config from '../../config';
import getToken from '../auth/getToken';

export const PIZZAS_REQUEST = 'PIZZAS_REQUEST';
export const PIZZAS_SUCCESS = 'PIZZAS_SUCCESS';
export const PIZZAS_FAILURE = 'PIZZAS_FAILURE';

export const ADD_PIZZA_REQUEST = 'ADD_PIZZA_REQUEST';
export const ADD_PIZZA_SUCCESS = 'ADD_PIZZA_SUCCESS';
export const ADD_PIZZA_FAILURE = 'ADD_PIZZA_FAILURE';

export const getPhones = offset => ({
  API_CALL: {
    endpoint: `${config.ENDPOINTS.PHONES}?offset=${offset || 0}`,
    method: 'GET',
    types: [PIZZAS_REQUEST, PIZZAS_SUCCESS, PIZZAS_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
  extraParams: offset,
});

export const getTotal = () => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PIZZAS_TOTAL,
    method: 'GET',
    types: [GET_TOTAL_REQUEST, GET_TOTAL_SUCCESS, GET_TOTAL_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
});

export const delPhone = phone => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.DEL_PHONE(phone),
    method: 'DELETE',
    types: [DEL_PIZZA_REQUEST, DEL_PIZZA_SUCCESS, DEL_PIZZA_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
    nextActions: [getPhones, getTotal],
  },
});

export const addPhone = phone => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PHONES,
    method: 'POST',
    types: [ADD_PIZZA_REQUEST, ADD_PIZZA_SUCCESS, ADD_PIZZA_FAILURE],
    data: JSON.stringify({ phone }),
    headers: { Authorization: `Bearer ${getToken().run()}` },
    nextActions: [getPhones, getTotal],
  },
});
