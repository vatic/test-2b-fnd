import { PIZZAS_FAILURE, PIZZAS_REQUEST, PIZZAS_SUCCESS, TOTAL_FAILURE, TOTAL_REQUEST, TOTAL_SUCCESS } from '../actions/pizzas/list';

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
    default:
      return state;
  }
}
