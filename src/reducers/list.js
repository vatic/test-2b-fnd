import {
  PIZZAS_REQUEST,
  PIZZAS_SUCCESS,
  PIZZAS_FAILURE } from '../actions/pizzas/list';

const initialState = {
  result: [],
  isFetching: false,
  total: 0,
  error: null,
  currentOffset: 0,
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case PIZZAS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case PIZZAS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.payload,
        currentOffset: action.extraParams,
        error: null,
      });
    case PIZZAS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
