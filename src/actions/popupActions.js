import * as types from './actionTypes';

export function popupDidMount(popupInitState) {
  return {type: types.POPUP_DID_MOUNT, popupInitState};
}

export function popupChangeState(popupCurrentState) {
  return {type: types.POPUP_CHANGE_STATE, popupCurrentState};
}

export function popupWillUnmount() {
  return {type: types.POPUP_WILL_UNMOUNT};
}
