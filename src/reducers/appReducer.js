import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default  function appReducer(state = initialState.app, action) {
  switch(action.type) {
    case types.IS_AUTHORIZE_SUCCESS:
    case types.LOGIN_APP_SUCCESS:
      return {login: true};
    case types.LOGOUT_APP_SUCCESS:
      return {login: false};

   default:
      return state;
  }
 }
