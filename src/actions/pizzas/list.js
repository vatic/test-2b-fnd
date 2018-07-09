import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';
import config from '../../config';
import getToken from '../auth/getToken';

export const PIZZAS_REQUEST = 'PIZZAS_REQUEST';
export const PIZZAS_SUCCESS = 'PIZZAS_SUCCESS';
export const PIZZAS_FAILURE = 'PIZZAS_FAILURE';

export const TOTAL_REQUEST = 'TOTAL_REQUEST';
export const TOTAL_SUCCESS = 'TOTAL_SUCCESS';
export const TOTAL_FAILURE = 'TOTAL_FAILURE';

export const MY_PIZZAS_REQUEST = 'MY_PIZZAS_REQUEST';
export const MY_PIZZAS_SUCCESS = 'MY_PIZZAS_SUCCESS';
export const MY_PIZZAS_FAILURE = 'MY_PIZZAS_FAILURE';

export const MY_TOTAL_REQUEST = 'MY_TOTAL_REQUEST';
export const MY_TOTAL_SUCCESS = 'MY_TOTAL_SUCCESS';
export const MY_TOTAL_FAILURE = 'MY_TOTAL_FAILURE';

export const ADD_PIZZA_REQUEST = 'ADD_PIZZA_REQUEST';
export const ADD_PIZZA_SUCCESS = 'ADD_PIZZA_SUCCESS';
export const ADD_PIZZA_FAILURE = 'ADD_PIZZA_FAILURE';

export const ENABLE_PIZZA_REQUEST = 'ENABLE_PIZZA_REQUEST';
export const ENABLE_PIZZA_SUCCESS = 'ENABLE_PIZZA_SUCCESS';
export const ENABLE_PIZZA_FAILURE = 'ENABLE_PIZZA_FAILURE';

export const DISABLE_PIZZA_REQUEST = 'DISABLE_PIZZA_REQUEST';
export const DISABLE_PIZZA_SUCCESS = 'DISABLE_PIZZA_SUCCESS';
export const DISABLE_PIZZA_FAILURE = 'DISABLE_PIZZA_FAILURE';

export const getPizzas = offset => ({
  API_CALL: {
    endpoint: `${config.ENDPOINTS.PIZZAS}?offset=${offset || 0}`,
    method: 'GET',
    types: [PIZZAS_REQUEST, PIZZAS_SUCCESS, PIZZAS_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
  extraParams: offset,
});

export const getPizzasByUser = offset => ({
  API_CALL: {
    endpoint: `${config.ENDPOINTS.PIZZAS_BY_USER}?offset=${offset || 0}`,
    method: 'GET',
    types: [MY_PIZZAS_REQUEST, MY_PIZZAS_SUCCESS, MY_PIZZAS_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
  extraParams: offset,
});

export const getTotal = () => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.TOTAL,
    method: 'GET',
    types: [TOTAL_REQUEST, TOTAL_SUCCESS, TOTAL_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
});

export const getTotalByUser = () => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.TOTAL_BY_USER,
    method: 'GET',
    types: [MY_TOTAL_REQUEST, MY_TOTAL_SUCCESS, MY_TOTAL_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
});


export const addPizza = pizza => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PIZZAS,
    method: 'POST',
    types: [ADD_PIZZA_REQUEST, ADD_PIZZA_SUCCESS, ADD_PIZZA_FAILURE],
    data: JSON.stringify(pizza),
    headers: { Authorization: `Bearer ${getToken().run()}` },
    // nextActions: [getPizzas],
  },
});

export const disablePizza = id => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PIZZA(id),
    method: 'DELETE',
    types: [DISABLE_PIZZA_REQUEST, DISABLE_PIZZA_SUCCESS, DISABLE_PIZZA_FAILURE],
    data: JSON.stringify({ id }),
    headers: { Authorization: `Bearer ${getToken().run()}` },
    nextActions: [getPizzas],
  },
});

export const enablePizza = id => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PIZZA_ENABLE(id),
    method: 'POST',
    types: [ENABLE_PIZZA_REQUEST, ENABLE_PIZZA_SUCCESS, ENABLE_PIZZA_FAILURE],
    data: JSON.stringify({ id }),
    headers: { Authorization: `Bearer ${getToken().run()}` },
    nextActions: [getPizzas],
  },
});

export const addPizzaEpic = (action$) => {
  console.log(action$);
  return action$.pipe(
  ofType(ADD_PIZZA_SUCCESS),
  mapTo(getPizzasByUser()),
)};
