import {WEB_API_URL} from './webApi';

const GET_ALL_TESTS = '/api/test/test';

const myHeaders = new Headers();

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

class TestApi {
  static getAllTests() {
    return fetch(WEB_API_URL + GET_ALL_TESTS, myInit);
  }

}

export default TestApi;
