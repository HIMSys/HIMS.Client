import {combineReducers} from 'redux';
import tests from './testReducer';
import app from './appReducer';
import popup from './popupReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootResucer = combineReducers({
  tests,
  app,
  popup,
  ajaxCallsInProgress
});

export default rootResucer;
