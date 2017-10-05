import * as types from './actionTypes';
import testApi from '../api/testApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

export  function  loadTestsSuccess(tests) {
  return { type: types.LOAD_TESTS_SUCCESS, tests };
}

export function loadTests(nameContainsFilter) {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return testApi.getAllTests(nameContainsFilter)
    .then((resp) => resp.json())
    .then((tests) => {
      dispatch(loadTestsSuccess(tests));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createTestSuccess(test) {
  return {type: types.CREATE_TEST_SUCCESS, test};
}

export function updateTestSuccess(test) {
  return {type: types.UPDATE_TEST_SUCCESS, test};
}

export function saveTest(test) {
  return function (dispatch, getState) {
      dispatch(beginAjaxCall());

      let saveProm = test.testId
        ? testApi.updateTest(test)
        : testApi.createTest(test);
      let successCallback = test.testId
        ? updateTestSuccess
        : createTestSuccess;

      return saveProm
      .then((resp) => {
        return resp.json();
      })
      .then((test) => {
        if (test.testId)
          dispatch(successCallback(test));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}

export function deleteTestSuccess(testId) {
  return {type: types.DELETE_TEST_SUCCESS, testId};
}

export function deleteTest(testId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return testApi.deleteTest(testId)
    .then((resp) => {
      if (resp.ok)
        dispatch(deleteTestSuccess(testId));
    }).catch(error => {
      throw(error);
    });
  };
}
