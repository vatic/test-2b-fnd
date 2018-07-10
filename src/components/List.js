import React from 'react';
import { Button, Grid, Header, Icon, Menu, Table } from 'semantic-ui-react';

const renderPagination = (props) => {
  const { list: { currentOffset, total, myTotal } } = props;
  const { admin, getPizzas } = props;
  let len = 0;
  if (admin) {
    len = total;
  } else {
    len = myTotal;
  }
  const numOfPages = len % 10 === 0 ? Math.floor(len / 10) : Math.floor(len / 10) + 1;
  const tempAry = [...Array(numOfPages).keys()];
  const prev = (currentOffset - 10) > 0 ? (currentOffset - 10) : 0;
  const next = (currentOffset + 10) < len ? (currentOffset + 10) : currentOffset;
  const pageItems = tempAry.map((item, i) => (
    <Menu.Item
      as="a"
      onClick={(e, { children }) => props.getPizzas((children - 1) * 10)}
      key={`menu_item_${i}`}
      active={Math.ceil(currentOffset / 10) === i}
    >
      {i + 1}

    </Menu.Item>
  ));
  return (
    <Menu floated="right" pagination>
      <Menu.Item
        onClick={() => getPizzas(prev)}
        disabled={currentOffset === 0}
        as="a"
        icon
      >
        <Icon name="left chevron" />
      </Menu.Item>
      {pageItems}
      <Menu.Item
        onClick={() => getPizzas(next)}
        disabled={currentOffset === next}
        as="a"
        icon
      >
        <Icon name="right chevron" />
      </Menu.Item>
    </Menu>
  );
};

const renderActions = (props, p) => {
  const { enablePizza, disablePizza, admin } = props;
  if (admin) {
    return (
      <Table.Cell>
        <Button
          size="mini"
          color={p.activity === 1 ? 'red' : 'green'}
          onClick={() => ((p.activity === 1) ? disablePizza(p.id) : enablePizza(p.id))}
        >
          {p.activity === 1 ? 'Disable' : 'Enable'}
        </Button>
      </Table.Cell>
    );
  }
  return null;
};

const renderRows = (props) => {
  const { admin } = props;
  const { result, myResult } = props.list;
  let pizzas = [];
  if (admin) {
    pizzas = result;
  } else {
    pizzas = myResult;
  }
  return pizzas.map(p => (
    <Table.Row
      key={p.id}
      className={(p.activity === 1) ? 'List-enabledPizza' : 'List-disabledPizza'}
    >
      <Table.Cell>
        {p.name}
      </Table.Cell>
      <Table.Cell className="List-Column-Ingredients">
        {p.ingredients}
      </Table.Cell>
      <Table.Cell className="List-Column-Ingredients">
        {p.username}
      </Table.Cell>
      {renderActions(props, p)}
    </Table.Row>
  ));
};

const tableHeader = admin => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>
          Наименование
      </Table.HeaderCell>
      <Table.HeaderCell>
          Ингредиенты
      </Table.HeaderCell>
      <Table.HeaderCell>
          Пользователь
      </Table.HeaderCell>
      {admin ? (
        <Table.HeaderCell>
            Действия
        </Table.HeaderCell>
      ) : null}
    </Table.Row>
  </Table.Header>
);

const tableFooter = (props) => {
  const { admin, total, myTotal } = props.list;
  let len = 0;
  if (admin) {
    len = total;
  } else {
    len = myTotal;
  }
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>
            <Header as="h3" color="grey">
              Всего:
                {' '}
                {len}
              </Header>
          </Table.HeaderCell>
        <Table.HeaderCell colSpan="3">
            {renderPagination(props)}
          </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
)};


const List = props => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column width={16}>
        <Table celled columns={4} textAlign="center">
          {tableHeader(props.admin)}
          <Table.Body key="tbody">
            {renderRows(props)}
          </Table.Body>
          {tableFooter(props)}
        </Table>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default List;
