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
        this.setState({ currentAddInputText: '' });
        this.props.getIngredients(0);
    }

    groupByType(arr) {
        const arrO = [...new Set(arr.map(o => o.b))].map(key => ({ [key]: arr.filter(o => o.b == key) }))
    }

    render() {
        return (
            <Grid columns={2} centered>
                <Grid columns={3} centered>
                    <Button color="red">
                        Тесто
                    </Button>
                    <Button color="orange">
                        Мясо
                    </Button>
                    <Button color="olive">
                        Сыр
                    </Button>
                    <Button color="green">
                        Соус
                    </Button>
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
};
