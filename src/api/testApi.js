import {WEB_API_URL} from './webApi';

const GET_ALL_TESTS = '/api/test/test';
const ADD_TEST = '/api/test/addtest';
const UPDATE_TEST = '/api/test/updatetest';
const DELETE_TEST = '/api/test/deletetest';

const myGetInit = { method: 'GET',
               headers: {},
               mode: 'cors',
               cache: 'default',
               credentials: 'include' };

const myPostInit = { method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    mode: 'cors',
                    cache: 'default',
                    credentials: 'include' };

class TestApi {
  static getAllTests(criterion) {
   let filter = criterion
    ? `?$filter=substringof('${criterion}',Name)`
    : '';

    return fetch(WEB_API_URL + GET_ALL_TESTS + filter, myGetInit);
  }

  static createTest(test) {
    let post = Object.assign({}, myPostInit);
    post.body = JSON.stringify(test);

    return fetch(WEB_API_URL + ADD_TEST, post);
  }

  static updateTest(test) {
    let post = Object.assign({}, myPostInit);
    post.body = JSON.stringify(test);

    return fetch(WEB_API_URL + UPDATE_TEST, post);
  }

  static deleteTest(testId) {
    let post = Object.assign({}, myPostInit);
    post.body = JSON.stringify(testId);

    return fetch(WEB_API_URL + DELETE_TEST, post);
  }
}

export default TestApi;
