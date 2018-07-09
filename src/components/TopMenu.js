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
    const { accessToken, loggedIn, logout } = this.props;
    return (
      <Grid centered>
        <Grid.Row>
          <Menu>
            <Grid.Column width={4}>
              <Menu.Item>
                <Button primary>
                  <Link to="/" style={{ color: '#fff' }}>
                    Конструктор
                  </Link>
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button primary>
                  <Link to="/list" style={{ color: '#fff' }}>
                    Мои пиццы
                  </Link>
                </Button>
              </Menu.Item>
            </Grid.Column>
            {loggedIn
              && (
                <Menu.Item>
                  <Button primary>
                    <Link to="/bo" style={{ color: '#fff' }}>
                      Админка
                    </Link>
                  </Button>
                </Menu.Item>
              )
            }
            <Menu.Item>
              {accessToken.length > 0 ? (
                <Button primary onClick={() => logout(accessToken)}>
                  Выйти
                </Button>
              ) : (
                <Button primary>
                  <Link to="/login" style={{ color: '#fff' }}>
                    Войти
                  </Link>
                </Button>
              )}
            </Menu.Item>
          </Menu>
        </Grid.Row>
      </Grid>
    );
  }
}
