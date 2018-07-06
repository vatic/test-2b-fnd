import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Input, Segment } from 'semantic-ui-react';

const ingredientsOptions = [
  { key: '1', value: 'Сыр', text: 'Сыр' },
  { key: '2', value: 'Тесто слоёное', text: 'Тесто слоёное' },
  { key: '3', value: 'Соус', text: 'Соус' },
];

export default class Constructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTypeId: 1 };
  }

  componentWillMount() {
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet'];
    this.props.getIngredients(0);
    this.props.getTypes();
  }

  groupByKey(arr, key) {
    const arrO = [...new Set(arr.map(o => o[key]))].map(k => ({ [k]: arr.filter(o => o[key] == k) }));
    return arrO.reduce((acc, curr, index, self) => Object.assign(acc, { [Object.keys(curr)[0]]: curr[Object.keys(curr)[0]] }), {});
  }

  handleTypeChange(typeId) {
    this.setState({ currentTypeId: typeId})
  }

  renderTypes(types) {
    return types.map(type => (
      <Button
        key={type.id}
        color={this.colors[type.id]}
        className="Constructor-typeBtn"
        onClick={e => this.handleTypeChange(type.id)}
      >
        {type.name}
      </Button>
    ));
  }

  renderIngredients(ingredients) {
    return ingredients.map(ingt => (
      <Segment>{ingt.name}</Segment>
    ));
  }

  render() {
    const types = this.props.typesList.result;
    const ingredients = this.groupByKey(this.props.list.result, 'type_id');
    let selectedIngredients = [];
    if (types && types.length > 0) {
      selectedIngredients = ingredients[this.state.currentTypeId] || [];
      console.log(selectedIngredients);
    }
    return (
      <Segment>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={6}>
              <Segment>
                {this.renderTypes(types)}
              </Segment>
              {this.renderIngredients(selectedIngredients)}
              <Segment.Group />
            </Grid.Column>
            <Grid.Column width={10}>
              <Input placeholder="Наименование..." />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
