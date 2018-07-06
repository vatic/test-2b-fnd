import { ADD_PIZZA_FAILURE, ADD_PIZZA_REQUEST, ADD_PIZZA_SUCCESS } from '../actions/pizzas/list';

const initialState = {
  status: false,
  msg: '',
  isFetching: false,
  error: null,
  errorMsg: '',
};

export default function addPizza(state = initialState, action) {
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
        msg: 'Пицца успешно сохранена',
      });
    case ADD_PIZZA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
        status: false,
        msg: '',
        errorMsg: action.payload.error.status === 422 ? 'Неверные параметры пиццы' : '',
      });
    default:
      return state;
  }
}
