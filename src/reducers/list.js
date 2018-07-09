import { MY_PIZZAS_FAILURE, MY_PIZZAS_REQUEST, MY_PIZZAS_SUCCESS, MY_TOTAL_FAILURE, MY_TOTAL_REQUEST, MY_TOTAL_SUCCESS, PIZZAS_FAILURE, PIZZAS_REQUEST, PIZZAS_SUCCESS, TOTAL_FAILURE, TOTAL_REQUEST, TOTAL_SUCCESS } from '../actions/pizzas/list';

const initialState = {
  result: [],
  myResult: [],
  isFetching: false,
  total: 0,
  myTotal: 0,
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
    case TOTAL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case TOTAL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        total: action.payload.total,
        currentOffset: action.extraParams,
        error: null,
      });
    case TOTAL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        total: 0,
        error: action.payload.error,
      });
    case MY_PIZZAS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case MY_PIZZAS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        myResult: action.payload,
        currentOffset: action.extraParams,
        error: null,
      });
    case MY_PIZZAS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    case MY_TOTAL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case MY_TOTAL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        myTotal: action.payload.total,
        currentOffset: action.extraParams,
        error: null,
      });
    case MY_TOTAL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        total: 0,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
