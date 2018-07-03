import {takeLatest, put, call } from 'redux-saga/effects'
import PostService from '../../service/post'

  function* fetchPost() {
    try {
      const posts = yield call(PostService.fetchPost())
      yield put({ type: 'FETCH_POSTS_SUCCESS', payload: posts })
    } catch (error) {
      yield put({ type: 'FETCH_POSTS_FAIL',error})
    }
  }

  export function* watchFetchPost() {
    yield takeLatest('FETCH_POST',fetchPost)
  }