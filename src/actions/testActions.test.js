import expect from 'expect';
import * as testActions from './testActions';
import * as types from './actionTypes';
import fetchMock from 'fetch-mock'

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Test Actions', () => {
  describe('createTestSuccess', () => {
    it('should create a CREATE_TEST_SUCCESS action', () => {
      //arrange
      const test = {testId: '1', name: 'test', description: 'This is my test'};
      const expectedAction = {
        type: types.CREATE_TEST_SUCCESS,
        test: test
      };

      //act
      const action = testActions.createTestSuccess(test);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mockResult = {tests: [{testId: '1', name: 'test', description: 'This is my test'}]};

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Test Actions Thunk', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_TESTS_SUCCESS when loading tests', (done) => {
      fetchMock.get('*', {body: mockResult});
      // nock('http://localhost:22795/api/test')
      //    .get('/test')
      //    .reply(200, );

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_TESTS_SUCCESS, body: mockResult }
      ];

      const store = mockStore({tests:[]}, expectedActions, done);
      store.dispatch(testActions.loadTests()).then(() => {
        const actions = store.getActions();
        const tests = store.getState().tests;
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_TESTS_SUCCESS);
        done();
      });
    });
  });
});
