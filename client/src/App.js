import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Add from './Add';
import Tracking from './Tracking';

class App extends Component {
  render() {
    return (
      <Container>       
        <BrowserRouter>
        <div>
          <Header />
          <Redirect from="/" to="/tracking" />
          <Route path="/add" component={Add} />
          <Route path="/tracking" component={Tracking} />
        </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
