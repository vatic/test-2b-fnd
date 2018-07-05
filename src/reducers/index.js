import { combineReducers } from 'redux';
import add from './add';
import { auth } from './auth';
import list from './list';


export const pizzas = combineReducers({
  auth,
  list,
  add,
});

export default auth;
