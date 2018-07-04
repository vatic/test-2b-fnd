import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import fetchMiddleware from '../middlewares/fetch';

// import auth, { phones } from '../reducers';
import { pizzas } from '../reducers';

const logger = createLogger();

const rootReducer = combineReducers(
  {
    pizzas,
    // auth,
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

