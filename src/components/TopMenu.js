import React from 'react';
import { Button, Menu, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import history from '../history';

export default class TopMenu extends React.Component {
  // componentDidMount() {
  //   // console.log('top props', this.props);
  // }
  // componentWillReceiveProps(nextProps) {
  //   const { accessToken, deleteToken, history } = nextProps;
  //   if (accessToken || accessToken === '') {
  //     deleteToken().run();
  //     history.push('/');
  //   }
  // }

  render() {
    // const { accessToken, logout } = this.props;
    return (
      <Grid centered>
        <Grid.Row>
          <Menu>
            <Grid.Column width={3}>
              <Menu.Item position='left'>
                <Button primary>
                  <Link to='/' style={{ color: '#fff' }}>Home</Link>
                  </Button>
              </Menu.Item>
            </Grid.Column>
            {/* {accessToken.length > 0 && */}
            {true &&
              <Menu.Item>
                <Button primary>
                  <Link to='/bo' style={{ color: '#fff' }}>BackOffice</Link>
                  </Button>
              </Menu.Item>
            }
            <Menu.Item position='right'>
              {/* {accessToken.length > 0 ? ( */}
              {true ? (
                // <Button primary onClick={() => logout(accessToken)}>
                <Button primary >
                  Logout
                </Button>
              ) : (
                <Button primary>
                  <Link to='/login' style={{ color: '#fff' }}>Login</Link>
                </Button>
              )}
            </Menu.Item>
          </Menu>
        </Grid.Row>
      </Grid>
    );
  }
}
