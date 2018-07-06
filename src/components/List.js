import React from 'react';
import {
 Button, Container, Grid, Header, Icon, Menu, Table 
} from 'semantic-ui-react';
import TopMenu from '../containers/TopMenu';
import InfoMessage from './InfoMessage';


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

  renderPagination(length) {
    const numOfPages = length % 10 === 0 ? Math.floor(length / 10) : Math.floor(length / 10) + 1;
    const tempAry = [...Array(numOfPages).keys()];
    const { currentOffset, total } = this.props.list;
    const prev = (currentOffset - 10) > 0 ? (currentOffset - 10) : 0;
    const next = (currentOffset + 10) < total ? (currentOffset + 10) : currentOffset;
    const pageItems = tempAry.map((item, i) => (
      <Menu.Item
        as="a"
        onClick={(e, { children }) => this.props.getPizzas((children - 1) * 10)}
        key={`menu_item_${i}`}
      >
        {i + 1}

      </Menu.Item>
    ));
    return (
      <Menu floated="right" pagination>
        <Menu.Item
          onClick={() => this.props.getPizzas(prev)}
          disabled={currentOffset === 0}
          as="a"
          icon
        >
          <Icon name="left chevron" />
        </Menu.Item>
        {pageItems}
        <Menu.Item
          onClick={() => this.props.getPizzas(next)}
          disabled={currentOffset === next}
          as="a"
          icon
        >
          <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    );
  }

  renderRow() {
    const { result } = this.props.list;
    const { enablePizza, disablePizza } = this.props;
    return result.map(p => (
      <Table.Row
        key={p.id}
        className={(p.activity === 1) ? 'List-enabledPizza' : 'List-disabledPizza'}
      >
        <Table.Cell>
          {p.name}
        </Table.Cell>
        <Table.Cell>
          {p.ingredients}
        </Table.Cell>
        <Table.Cell>
          <Button
            size="mini"
            color={p.activity === 1 ? 'red' : 'green'}
            onClick={() => ((p.activity === 1) ? disablePizza(p.id) : enablePizza(p.id))}
          >
            {p.activity === 1 ? 'Disable' : 'Enable'}
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  }

  renderMessage(key) {
    const { status, msg, errorMsg } = this.props[key];
    const color = status ? 'green' : 'red';
    const text = status ? msg : errorMsg;
    if (text !== '') {
      return (
        <InfoMessage color={color} header={text} timeout={5000} />
      );
    }
    return null;
  }

  render() {
    const { total } = this.props.list;
    return (
      <Container>
        <TopMenu history={this.props.history} />
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={16}>
              <Table celled columns={4} textAlign="center">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>
                      Наименование
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Ингредиенты
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Действия
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.renderRow()}
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell>
                      <Header as="h3" color="grey">
                        Всего:
                        {' '}
                        {total}
                      </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell colSpan="3">
                      {this.renderPagination(total)}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
