import expect from 'expect';
import testReducer from './testReducer';
import * as actions from '../actions/testActions';

describe('Test Reducer', () => {
  it('should add test when passed CREATE_TEST_SUCCESS', () => {
    // arrange
    const initialState = [
      {name: 'A'},
      {name: 'B'}
    ];

    const newTest = {name: 'C'};

    const action = actions.createTestSuccess(newTest);

    // act
    const newState = testReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('A');
    expect(newState[1].name).toEqual('B');
    expect(newState[2].name).toEqual('C');
  });

  it('should update test when passed UPDATE_TEST_SUCCESS', () => {
    // arrange
    const initialState = [
      {testId: '1', name: 'A'},
      {testId: '2', name: 'B'},
      {testId: '3', name: 'C'}
    ];

    const test = {testId: '2', name: 'New Name'};
    const action = actions.updateTestSuccess(test);

    // act
    const newState = testReducer(initialState, action);
    const updatedTest = newState.find(a => a.testId == test.testId);
    const untouchedTest = newState.find(a => a.testId == '1');

    // assert
    expect(updatedTest.name).toEqual('New Name');
    expect(untouchedTest.name).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
