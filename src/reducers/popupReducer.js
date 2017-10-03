import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default  function appReducer(state = initialState.popupState, action) {
  switch(action.type) {
    case types.POPUP_DID_MOUNT:
      return action.popupInitState;
    case types.POPUP_CHANGE_STATE:
      return action.popupCurrentState;
    case types.POPUP_WILL_UNMOUNT:
      return initialState.popupState;

   default:
      return state;
  }
 }
