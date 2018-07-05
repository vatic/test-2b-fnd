import config from '../../config';
import getToken from '../auth/getToken';

export const INGREDIENTS_REQUEST = 'INGREDIENTS_REQUEST';
export const INGREDIENTS_SUCCESS = 'INGREDIENTS_SUCCESS';
export const INGREDIENTS_FAILURE = 'INGREDIENTS_FAILURE';


export const getIngredients = offset => ({
  API_CALL: {
    endpoint: `${config.ENDPOINTS.INGREDIENTS}?offset=${offset || 0}`,
    method: 'GET',
    types: [INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS, INGREDIENTS_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
  extraParams: offset,
});
