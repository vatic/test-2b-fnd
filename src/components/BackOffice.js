import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TopMenu from '../containers/TopMenu';
import List from './List';


export default class BackOffice extends React.Component {
  componentWillMount() {
    const { getPizzas, getTotal } = this.props;
    getPizzas(0);
    getTotal();
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps.list;
    const { history, deleteToken } = nextProps;
    if (error !== null && !error.ok) {
      deleteToken().run();
      history.push('/login');
    }
  }

  render() {
    const { auth, history, list, getPizzas, enablePizza, disablePizza } = this.props;
    if (auth.user.role !== 'admin' || list.result.code > 399) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <Container>
        <TopMenu history={history} />
        <List
          admin
          list={list}
          getPizzas={getPizzas}
          enablePizza={enablePizza}
          disablePizza={disablePizza}
        />
      </Container>
    );
  }
}
