import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default  function courseReducer(state = initialState.tests, action) {
 switch(action.type) {
   case types.LOAD_TESTS_SUCCESS:
     return action.tests;

   case types.CREATE_TEST_SUCCESS:
     return [
       ...state,
       Object.assign({}, action.test)
     ];

   case types.UPDATE_TEST_SUCCESS:
     return [
       ...state.filter(test => test.testId !== action.test.testId),
       Object.assign({}, action.test)
     ];

  case types.DELETE_TEST_SUCCESS:
     return state.filter(test => test.testId !== action.testId);

  default:
     return state;
 }
}
