import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, ME_FAILURE, ME_REQUEST, ME_SUCCESS } from '../actions/auth/auth';

const initialState = {
  loggedIn: localStorage.token !== undefined && localStorage.token !== '',
  tokenType: 'Bearer',
  accessToken: localStorage.token || '',
  expiresIn: '',
  error: {},
  user: {},
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
      localStorage.clear();
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
    case ME_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ME_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
        user: action.payload,
      });
    case ME_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        user: {},
        error: action.payload.error,
      });
    default:
      return state;
  }
}
