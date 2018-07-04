import {
  ADD_PIZZA_REQUEST,
  ADD_PIZZA_SUCCESS,
  ADD_PIZZA_FAILURE } from '../actions/phones//backoffice';

const initialState = {
  status: false,
  msg: '',
  isFetching: false,
  error: null,
  errorMsg: '',
};

export default function addPhone(state = initialState, action) {
  switch (action.type) {
    case ADD_PIZZA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        errorMsg: '',
        msg: '',
      });
    case ADD_PIZZA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        errorMsg: '',
        status: true,
        msg: 'Phone added succesfully',
      });
    case ADD_PIZZA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
        status: false,
        msg: '',
        errorMsg: action.payload.error.status === 422 ? 'Phone not valid' : '',
      });
    default:
      return state;
  }
}
