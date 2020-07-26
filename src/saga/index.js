import { call, takeLatest, takeEvery, put } from "redux-saga/effects";
import {
  FETCH_POST,
  LOAD_POST,
  CREATE_POST,
  CREATE_SUCCESS,
  EDIT_POST,
  EDIT_SUCCESS,
  DELETE_POST,
  DELETE_SUCCESS,
  NETWORK_ERROR,
} from "../actions/types";
import axios from "axios";

//worker saga
function* loadPostsAsync() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts/"
    );
    yield put({ type: LOAD_POST, data: response.data });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });
    console.log(e);
  }
}

function* createPostAsync(data) {
  try {
    const response = yield call(
      axios.post,
      "https://jsonplaceholder.typicode.com/posts/",
      data.payload
    );

    yield put({ type: CREATE_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });

    console.log(e);
  }
}

function* editPostAsync(data) {
  try {
    const response = yield call(
      axios.put,
      `https://jsonplaceholder.typicode.com/posts/${data.payload.id}`,
      data.payload
    );

    console.log(response);

    yield put({ type: EDIT_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });
    console.log(e);
  }
}

function* deletePostAsync(data) {
  try {
    const response = yield call(
      axios.delete,
      `https://jsonplaceholder.typicode.com/posts/${data.payload.id}`
    );

    yield put({ type: DELETE_SUCCESS, payload: data.payload.id });
  } catch (e) {
    yield put({ type: NETWORK_ERROR });
    console.log(e);
  }
}

//watcher saga
function* rootSaga() {
  yield takeEvery(FETCH_POST, loadPostsAsync);
  yield takeEvery(CREATE_POST, createPostAsync);
  yield takeEvery(EDIT_POST, editPostAsync);
  yield takeEvery(DELETE_POST, deletePostAsync);
}
//watcher saga -> action-> worker saga

export default rootSaga;
