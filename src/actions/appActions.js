import * as types from './actionTypes';
import appApi from '../api/appApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";
import { setLocale } from 'react-redux-i18n';

export  function  loginAppSuccess() {
  return { type: types.LOGIN_APP_SUCCESS};
}

export function loginApp(credentials) {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return appApi.loginApp(credentials)
    .then((resp) => {
      if (resp.ok)
        dispatch(loginAppSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export  function  logoutAppSuccess() {
  return { type: types.LOGOUT_APP_SUCCESS};
}

export function logoutApp() {
  return function (dispatch) {
    return appApi.logoutApp()
    .then((resp) => {
      if (resp.ok)
        dispatch(logoutAppSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export  function  isAuthorizeSuccess() {
  return { type: types.IS_AUTHORIZE_SUCCESS};
}

export function isAuthorize() {
  return function (dispatch) {
    return appApi.isAuthorize()
    .then((resp) => {
      if (resp.ok)
        dispatch(isAuthorizeSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export  function  languageChange(languageId) {
  return function (dispatch) {
    dispatch(setLocale(languageId));
  };
}


