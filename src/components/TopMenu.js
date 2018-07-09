import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Menu } from 'semantic-ui-react';
// import history from '../history';

export default class TopMenu extends React.Component {
  componentWillMount() {
    this.props.me(this.props.accessToken);
  }

  componentWillReceiveProps(nextProps) {
    const { accessToken, deleteToken, history } = nextProps;
    // if (accessToken || accessToken === '') {
    //   deleteToken().run();
    //   history.push('/');
    // }
  }

  render() {
    console.log('topmenu: ', this.props)
    const { accessToken, loggedIn, logout, user } = this.props;
    return (
      <Grid centered>
        <Grid.Row>
          {loggedIn
          && (
          <Menu>
            <Grid.Column>
              <Menu.Item>
                <Button primary>
                  <Link to="/" style={{ color: '#fff' }}>
                    Конструктор
                  </Link>
                </Button>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>
                <Button primary>
                  <Link to="/list" style={{ color: '#fff' }}>
                    Мои пиццы
                  </Link>
                </Button>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>
                <Button primary>
                  <Link to="/bo" style={{ color: '#fff' }}>
                    Админка
                  </Link>
                </Button>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>
                <Button primary onClick={() => logout(accessToken)}>
                  Выйти
                </Button>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>
                <div className="sub header">
                  {user.username}
                </div>
              </Menu.Item>
            </Grid.Column>
          </Menu>
          )}
          {!loggedIn
            && (
            <Menu>
              <Grid.Column>
                <Menu.Item>
                  <Link to="/login" style={{ color: '#fff' }}>
                    Войти
                  </Link>
                </Menu.Item>
              </Grid.Column>
            </Menu>
            )}
        </Grid.Row>
      </Grid>
    );
  }
}
