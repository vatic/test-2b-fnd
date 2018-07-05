import React from 'react';
import { Form, Button, Container, Grid, Header } from 'semantic-ui-react';

export default class Login extends React.Component {
  componentWillMount() {
    this.resetComponent();
  }

  componentWillReceiveProps(nextProps) {
    const { accessToken, saveToken, history } = nextProps;
    if (typeof accessToken === 'string' && accessToken.length > 0) {
      saveToken(accessToken).run();
      history.push('/bo');
    }
  }

  resetComponent = () => this.setState({ username: '', password: '' });

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { username, password } = this.state;
    this.props.loginAction(username, password);
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container>
        <Grid verticalAlign='middle' textAlign='center' centered={true} columns={3}>
          <Grid.Column>
            <Header as='h2' color='grey'>Login to your account</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <Form.Input placeholder='Password' name='password' type='password' value={password} onChange={this.handleChange} />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
