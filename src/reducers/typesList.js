import { TYPES_FAILURE, TYPES_REQUEST, TYPES_SUCCESS } from '../actions/types/list';

const initialState = {
  result: [],
  isFetching: false,
  total: 0,
  error: null,
  currentOffset: 0,
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case TYPES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case TYPES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.payload,
        currentOffset: action.extraParams,
        error: null,
      });
    case TYPES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
