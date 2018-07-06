import { DISABLE_PIZZA_FAILURE, DISABLE_PIZZA_REQUEST, DISABLE_PIZZA_SUCCESS, ENABLE_PIZZA_FAILURE, ENABLE_PIZZA_REQUEST, ENABLE_PIZZA_SUCCESS } from '../actions/pizzas/list';

const initialState = {
  status: false,
  msg: '',
  isFetching: false,
  error: null,
  errorMsg: '',
};

export default function changeActivity(state = initialState, action) {
  switch (action.type) {
    case ENABLE_PIZZA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        errorMsg: '',
        msg: '',
      });
    case ENABLE_PIZZA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        errorMsg: '',
        status: true,
        msg: 'Pizza enabled succesfully',
      });
    case ENABLE_PIZZA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
        status: false,
        msg: '',
        errorMsg: action.payload.error.status === 422 ? 'Pizza not valid' : '',
      });
    case DISABLE_PIZZA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        errorMsg: '',
        msg: '',
      });
    case DISABLE_PIZZA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        errorMsg: '',
        status: true,
        msg: 'Pizza enabled succesfully',
      });
    case DISABLE_PIZZA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
        status: false,
        msg: '',
        errorMsg: action.payload.error.status === 422 ? 'Pizza not valid' : '',
      });
    default:
      return state;
  }
}
