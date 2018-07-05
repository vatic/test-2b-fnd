import config from '../../config';
import getToken from '../auth/getToken';

export const TYPES_REQUEST = 'TYPES_REQUEST';
export const TYPES_SUCCESS = 'TYPES_SUCCESS';
export const TYPES_FAILURE = 'TYPES_FAILURE';


export const getTypes = offset => ({
    API_CALL: {
        endpoint: `${config.ENDPOINTS.TYPES}?offset=${offset || 0}`,
        method: 'GET',
        types: [TYPES_REQUEST, TYPES_SUCCESS, TYPES_FAILURE],
        headers: { Authorization: `Bearer ${getToken().run()}` },
    },
    extraParams: offset,
});
