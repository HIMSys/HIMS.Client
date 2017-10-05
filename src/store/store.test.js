import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as testActions from '../actions/testActions';

describe('Store', function () {
  it('Should handel creating test', function() {
    //arrange
    const store = createStore(rootReducer, initialState);
    const test = {
      name: "Test"
    };

    //act
    const action = testActions.createTestSuccess(test);
    store.dispatch(action);

    //assert
    const actual = store.getState().tests[0];
    const expected = {
      name: "Test"
    }

    expect(actual).toEqual(expected);
  });
});
