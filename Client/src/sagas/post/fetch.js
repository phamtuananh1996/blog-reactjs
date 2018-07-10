import {takeLatest, put, call } from 'redux-saga/effects'
import Type from '../../store/action_type/action_type'
import PostService from '../../service/post'

  function* fetchPost() {
    //alert('ok')
    try {
      const posts = yield call(PostService.fetchPost)
      yield put({ type: Type.FETCH_POSTS_SUCCESS, payload: posts })
    } catch (error) {
      yield put({ type: Type.FETCH_POSTS_FAIL,error})
    }
  }

  export function* watchFetchPost() {
    yield takeLatest(Type.FETCH_POSTS,fetchPost)
  }