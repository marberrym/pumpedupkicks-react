import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/*' component={App} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
