import React from 'react';
import { Container } from 'semantic-ui-react';
import TopMenu from '../containers/TopMenu';
import List from './List';


export default class BackOffice extends React.Component {
  componentWillMount() {
    this.setState({ currentAddInputText: '' });
    this.props.getPizzasByUser(0);
    this.props.getTotalByUser();
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
    return (
      <Container>
        <TopMenu history={this.props.history} />
        <List
          list={this.props.list}
          getPizzas={this.props.getPizzasByUser}
        />
      </Container>
    );
  }
}