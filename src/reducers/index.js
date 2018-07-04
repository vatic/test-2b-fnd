import { combineReducers } from 'redux';

// import { auth } from './auth';
import list from './list';
import add from './add';

export const pizzas = combineReducers({
  list,
  add,
});

// export default auth;
