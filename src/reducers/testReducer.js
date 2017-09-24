import * as types from '../actions/actionTypes';

export default  function courseReducer(state = [], action) {
 switch(action.type) {
   case types.LOAD_TESTS_SUCCESS:
     return action.tests;

   default:
     return state;
 }
}
