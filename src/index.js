/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import  { Router, browserHistory } from 'react-router';
import  routes from './routes';
import {loadTests} from './actions/testActions';
import  './styles/styles.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../node_modules/toastr/build/toastr.min.css';
import {isAuthorize} from "./actions/appActions";
import translationsObject from './translation';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

const store = configureStore();

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'));

store.dispatch(isAuthorize());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
