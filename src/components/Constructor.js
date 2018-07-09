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
    this.handleDeleteIngredientClick = this.handleDeleteIngredientClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  componentWillMount() {
    const { getIngredients, getTypes } = this.props;
    this.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet'];
    getIngredients(0);
    getTypes();
  }

  componentWillReceiveProps(nextProps) {
    const { history, add } = this.props;
    console.dir(nextProps.add.status);
    console.dir(add.status);
    const { status } = nextProps.add;
    if (!add.status && status) {
      console.log('must change');
      this.setState = {
        currentTypeId: 1,
        currentPizza: { name: '', ingredients: [] },
      };
      history.push('/bo');
    }
  }

  componentWillUnmount() {
    this.setState = {
      currentTypeId: 1,
      currentPizza: { name: '', ingredients: [] },
    };
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
    this.setState({
      currentTypeId: this.state.currentTypeId,
      currentPizza: {
        name: current.name,
        ingredients: [...new Set([...current.ingredients, ingredient])],
      },
    });
  }

  handleDeleteIngredientClick(id) {
    const current = this.state.currentPizza;
    const index = current.ingredients.findIndex((e, i, self) => e.id === id);
    console.log('index: ', index);
    this.setState({
      currentTypeId: this.state.currentTypeId,
      currentPizza: {
        name: current.name,
        ingredients: [...current.ingredients.slice(0, index), ...current.ingredients.slice(index + 1)],
      },
    });
  }

  handleSubmit() {
    const { currentPizza } = this.state;
    const { addPizza, history } = this.props;
    const forSubmit = { name: currentPizza.name, ids: currentPizza.ingredients.map(i => i.id) };
    addPizza(forSubmit);
    history.push('/list');
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

  renderCurrentIngredients(ingredients) {
    return ingredients.map(ingt => (
      <Segment key={ingt.id} className="Constructor-currentIngredient">
        <p>{ingt.name}</p>
        <Button
          color="red"
          className="Constructor-deleteIngredient"
          style={{ float: 'right' }}
          onClick={() => this.handleDeleteIngredientClick(ingt.id)}
        >
          &mdash;
        </Button>
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
    const { currentPizza, currentTypeId } = this.state;
    console.dir(currentPizza.ingredients);
    const { list, typesList } = this.props;
    const types = typesList.result;
    const ingredients = this.groupByKey(list.result, 'type_id');
    let selectedIngredients = [];
    if (types && types.length > 0) {
      selectedIngredients = ingredients[currentTypeId] || [];
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
                value={currentPizza.name}
                onChange={this.handleNameChange}
              />
              <Segment.Group>
                {this.renderCurrentIngredients(currentPizza.ingredients)}
              </Segment.Group>
              <Card
                header={currentPizza.name}
                description={`Состав: ${currentPizza.ingredients.map(i => i.name).join(', ')}`}
                meta="320г."
              />
              <Button
                color="red"
                disabled={!(currentPizza.name && currentPizza.ingredients.length > 0)}
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
