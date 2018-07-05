import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Input } from 'semantic-ui-react';

const ingredientsOptions = [
  { key: '1', value: 'Сыр', text: 'Сыр' },
  { key: '2', value: 'Тесто слоёное', text: 'Тесто слоёное' },
  { key: '3', value: 'Соус', text: 'Соус' },
];

export default class Constructor extends React.Component {
  componentWillMount() {
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet'];
    this.setState({ currentAddInputText: '' });
    this.props.getIngredients(0);
    this.props.getTypes();
  }

  groupByKey(arr, key) {
    const arrO = [...new Set(arr.map(o => o[key]))].map(k => ({ [k]: arr.filter(o => o[key] == k) }));
    return arrO.reduce((acc, curr, index, self) => Object.assign(acc, { [Object.keys(curr)[0]]: curr[Object.keys(curr)[0]] }), {});
  }

  renderTypes(types) {
    return types.map(type => (
      <Button color={this.colors[type.id]}>
        {type.name}
      </Button>
    ));
  }

  render() {
    const types = this.props.typesList.result;
    const ingredients = this.groupByKey(this.props.list.result, 'type_id');
    // console.log(ingredients[types[0].id]);
    console.log(types[0]);
    return (
      <Grid columns={2} centered>
        <Grid columns={3} centered>
          {this.renderTypes(types)}
        </Grid>
        <Grid columns={1} centered>
          <Grid.Row stretched>
            <Grid.Column>
              <Input placeholder="Наименование..." />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    );
  }
}
