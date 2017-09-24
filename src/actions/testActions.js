import * as types from './actionTypes';
import testApi from '../api/testApi';

export  function  loadTestsSuccess(tests) {
  return { type: types.LOAD_TESTS_SUCCESS, tests };
}

export function loadTests() {
  return function (dispatch) {
    return testApi.getAllTests()
    .then((resp) => resp.json())
    .then((tests) => {
      dispatch(loadTestsSuccess(tests));
    }).catch(error => {
      throw(error);
    });
  };
}
