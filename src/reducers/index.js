import { combineReducers } from 'redux';
import add from './add';
import { auth } from './auth';
import ingredientsList from './ingredientsList';
import list from './list';


export const pizzas = combineReducers({
  // auth,
  list,
  add,
});

export const ingredients = combineReducers({
  list: ingredientsList,
});

export default auth;
