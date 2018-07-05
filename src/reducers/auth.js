import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE } from '../actions/auth/auth';

const initialState = {
  loggedIn: localStorage.token !== undefined || localStorage.token !== '',
  tokenType: 'Bearer',
  accessToken: localStorage.token || '',
  expiresIn: '',
  error: {},
};

// eslint-disable-next-line import/prefer-default-export
export function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        loggedIn: true,
        tokenType: action.payload.token_type,
        accessToken: action.payload.access_token,
        expiresIn: action.payload.expires_in,
        error: action.payload.error,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        loggedIn: false,
        error: action.payload.error,
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        loggedIn: false,
        accessToken: '',
        error: action.payload.error,
      });
    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
