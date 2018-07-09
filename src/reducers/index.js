import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { addPizzaEpic } from '../actions/pizzas/list';
import add from './add';
import { auth } from './auth';
import changeActivity from './changeActivity';
import ingredientsList from './ingredientsList';
import list from './list';
import typesList from './typesList';

export const rootEpic = combineEpics(
  addPizzaEpic,
);

export const pizzas = combineReducers({
  // auth,
  list,
  add,
  changeActivity,
});

export const ingredients = combineReducers({
  list: ingredientsList,
});

export const types = combineReducers({
  list: typesList,
});

export default auth;
