import { INGREDIENTS_FAILURE, INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS } from '../actions/ingredients/list';

const initialState = {
  result: [],
  isFetching: false,
  total: 0,
  error: null,
  currentOffset: 0,
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case INGREDIENTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case INGREDIENTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.payload,
        currentOffset: action.extraParams,
        error: null,
      });
    case INGREDIENTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
