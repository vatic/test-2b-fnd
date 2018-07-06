import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Constructor from './containers/Constructor';
import TopMenu from './containers/TopMenu';
import './index.css';

const App = props => (
  <Container textAlign="center">
    <TopMenu history={props.history} />
    <Constructor history={props.history} />
  </Container>
);

export default App;
