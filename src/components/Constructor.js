import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
 Button, Card, Grid, Input, Segment 
} from 'semantic-ui-react';

export default class Constructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTypeId: 1,
      currentPizza: { name: '', ingredients: [] },
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentWillMount() {
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet'];
    this.props.getIngredients(0);
    this.props.getTypes();
  }

  groupByKey(arr, key) {
    const arrO = [...new Set(arr.map(o => o[key]))].map(k => ({ [k]: arr.filter(o => o[key] === k) }));
    return arrO.reduce((acc, curr, index, self) => Object.assign(acc, { [Object.keys(curr)[0]]: curr[Object.keys(curr)[0]] }), {});
  }

  handleTypeChange(typeId) {
    this.setState({ currentTypeId: typeId });
  }

  handleNameChange(event) {
    // console.dir(event.target.value);
    this.setState({ currentPizza: { name: event.target.value, ingredients: this.state.currentPizza.ingredients } });
  }

  handleIngredientClick(ingredient) {
    const current = this.state.currentPizza;
    console.log(current);
    this.setState({ currentPizza: { name: current.name, ingredients: [...current.ingredients, ingredient] } });
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
      <Segment
        key={ingt.id}
        className="Constructor-ingredient"
        onClick={() => this.handleIngredientClick(ingt)}
      >
        {ingt.name}
      </Segment>
    ));
  }


  render() {
    const types = this.props.typesList.result;
    const ingredients = this.groupByKey(this.props.list.result, 'type_id');
    let selectedIngredients = [];
    if (types && types.length > 0) {
      selectedIngredients = ingredients[this.state.currentTypeId] || [];
    }
    return (
      <Segment className="Constructor-wrapper">
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={6}>
              <Segment.Group>
                <Segment>
                  {this.renderTypes(types)}
                </Segment>
                {this.renderIngredients(selectedIngredients)}
              </Segment.Group>
            </Grid.Column>
            <Grid.Column width={10}>
              <Input
                fluid
                placeholder="Наименование..."
                value={this.state.currentPizza.name}
                onChange={this.handleNameChange}
              />
              <Card
                header={this.state.currentPizza.name}
                description={`Состав: ${this.state.currentPizza.ingredients.map(i => i.name).join(', ')}`}
                meta="320г."
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
