import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import fetchMiddleware from '../middlewares/fetch';
import auth, { ingredients, pizzas, rootEpic, types } from '../reducers';

const epicMiddleware = createEpicMiddleware();


const logger = createLogger();

const rootReducer = combineReducers(
  {
    pizzas,
    ingredients,
    types,
    auth,
  },
);

const initialState = {};

export default function configureStore() {
  let store;
  if (module.hot) {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware, fetchMiddleware, epicMiddleware, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware, fetchMiddleware, epicMiddleware, logger),
    ));
  }
  epicMiddleware.run(rootEpic);
  return store;
}
