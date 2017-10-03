import {combineReducers} from 'redux';
import tests from './testReducer';
import app from './appReducer';
import popup from './popupReducer';

const rootResucer = combineReducers({
  tests,
  app,
  popup
});

export default rootResucer;
