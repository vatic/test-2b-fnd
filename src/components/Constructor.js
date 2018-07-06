import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Grid, Input, Segment } from 'semantic-ui-react';
import InfoMessage from './InfoMessage';

export default class Constructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTypeId: 1,
      currentPizza: { name: '', ingredients: [] },
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientClick = this.handleIngredientClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  componentWillMount() {
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet'];
    this.props.getIngredients(0);
    this.props.getTypes();
  }

  componentWillUnmount() {
    this.setState = {
      currentTypeId: 1,
      currentPizza: { name: '', ingredients: [] },
    };
  }

  componentWillReceiveProps(nextProps) {
    console.dir(nextProps.add.status);
    console.dir(this.props.add.status);
    const { status } = nextProps.add;
    if (!this.props.add.status && status) {
      console.log('must change');
      this.setState = {
        currentTypeId: 1,
        currentPizza: { name: '', ingredients: [] },
      };
      this.props.history.push('/bo');
    }
  }

  groupByKey(arr, key) {
    const arrO = [...new Set(arr.map(o => o[key]))].map(k => ({ [k]: arr.filter(o => o[key] === k) }));
    return arrO.reduce((acc, curr, index, self) => Object.assign(acc, { [Object.keys(curr)[0]]: curr[Object.keys(curr)[0]] }), {});
  }

  handleTypeChange(typeId) {
    this.setState({ currentTypeId: typeId });
  }

  handleNameChange(event) {
    this.setState({ currentPizza: { name: event.target.value, ingredients: this.state.currentPizza.ingredients } });
  }

  handleIngredientClick(ingredient) {
    const current = this.state.currentPizza;
    this.setState({ currentPizza: { name: current.name, ingredients: [...current.ingredients, ingredient] } });
  }

  handleSubmit() {
    const forSubmit = { name: this.state.currentPizza.name, ids: this.state.currentPizza.ingredients.map(i => i.id) };
    this.props.addPizza(forSubmit);
    this.setState = {
      currentTypeId: 1,
      currentPizza: { name: '', ingredients: [] },
    };
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
    console.log(this.state);
    console.log(this.props);
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
              <Segment.Group>
                {this.renderIngredients(this.state.currentPizza.ingredients)}
              </Segment.Group>
              <Card
                header={this.state.currentPizza.name}
                description={`Состав: ${this.state.currentPizza.ingredients.map(i => i.name).join(', ')}`}
                meta="320г."
              />
              <Button
                color="red"
                disabled={!(this.state.currentPizza.name && this.state.currentPizza.ingredients.length > 0)}
                onClick={() => this.handleSubmit()}
              >
                Сохранить
              </Button>
              {this.renderMessage('add')}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
