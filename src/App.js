import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import TopMenu from './containers/TopMenu';
import './index.css';
// import TopMenu from './containers/TopMenu';
// import SearchPhone from './containers/SearchPhone';

const App = props => (
  <Container textAlign="center">
    <TopMenu history={props.history} />
    <Header as="h1" color="grey">
      Simple Pizza Constructor
    </Header>
    <p>
      Hello
    </p>
    {/* <SearchPhone /> */}
  </Container>
);

export default App;
