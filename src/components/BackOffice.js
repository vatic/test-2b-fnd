import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TopMenu from '../containers/TopMenu';
import List from './List';


export default class BackOffice extends React.Component {
  componentWillMount() {
    this.setState({ currentAddInputText: '' });
    this.props.getPizzas(0);
    this.props.getTotal();
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
    const { history, list, enablePizza, disablePizza } = this.props;
    if (list.result.code > 399) {
      return (
        <Container>
          <TopMenu history={history} />
          <List
            admin
            list={list}
            enablePizza={enablePizza}
            disablePizza={disablePizza}
          />
        </Container>
      );
    }
    return (
      <Redirect to="/" />
    );
  }
}
