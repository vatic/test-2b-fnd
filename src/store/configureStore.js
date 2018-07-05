import {
 applyMiddleware, combineReducers, compose, createStore 
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import fetchMiddleware from '../middlewares/fetch';
import auth, { ingredients, pizzas } from '../reducers';

const logger = createLogger();

const rootReducer = combineReducers(
  {
    pizzas,
    ingredients,
    auth,
  },
);

const initialState = {};

export default function configureStore() {
  let store;
  if (module.hot) {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware, fetchMiddleware, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware, fetchMiddleware, logger),
    ));
  }
  return store;
}
