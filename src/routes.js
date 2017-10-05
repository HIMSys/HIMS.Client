import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import TestPage from './components/test/TestPage';
import AddEditTestPopup from './components/test/AddEditTestPopup'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <Route path="test" component={TestPage}>
      <Route path="testmodal" component={AddEditTestPopup} />
      <Route path="testmodal/:id" component={AddEditTestPopup} />
    </Route>
  </Route>
);
