import {WEB_API_URL} from './webApi';

const LOGIN_USER = '/api/account/login';
const LOGOUT_USER = '/api/account/logout';
const IS_USER_AUTHORIZE = '/api/account/isauthorize';

const myHeaders = new Headers();

const myGetInit = { method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default',
                    credentials: 'include' };

const myPostInit = { method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    mode: 'cors',
                    cache: 'default',
                    credentials: 'include' };

class TestApi {
  static loginApp(credentials) {
    let post = Object.assign({}, myPostInit);
    post.body = JSON.stringify(credentials);

    return fetch(WEB_API_URL + LOGIN_USER, post);
  }

  static logoutApp() {
    return fetch(WEB_API_URL + LOGOUT_USER, myGetInit);
  }

  static isAuthorize() {
    return fetch(WEB_API_URL + IS_USER_AUTHORIZE, myGetInit);
  }
}

export default TestApi;
