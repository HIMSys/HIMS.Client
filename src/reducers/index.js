import {combineReducers} from 'redux';
import tests from './testReducer';
import app from './appReducer';

const rootResucer = combineReducers({
  tests,
  app
});

export default rootResucer;
