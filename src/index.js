import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import BackOffice from './containers/BackOffice';
import ListByUser from './containers/ListByUser';
import Login from './containers/Login';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/bo" component={BackOffice} />
        <Route path="/list" component={ListByUser} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
