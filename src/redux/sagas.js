import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCHED_POSTS, REQUEST_POSTS} from "./postsReducer";
import {hideLoader, showLoader} from "./loaderReducer";

export function* sagaWorker(){
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({type: FETCHED_POSTS, payload})
    yield put(hideLoader())
}

export function* sagaWatcher(){
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return  await response.json()
}