import {combineReducers} from 'redux';
import tests from './testReducer';
import app from './appReducer';
import popup from './popupReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { i18nReducer } from 'react-redux-i18n';

const rootResucer = combineReducers({
  tests,
  app,
  popup,
  ajaxCallsInProgress,
  i18n: i18nReducer
});

export default rootResucer;
