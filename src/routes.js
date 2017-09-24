import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import TestPage from './components/test/TestPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TestPage} />
    <Route path="test" component={TestPage} />
  </Route>
);
