import {put,call,takeLatest} from 'redux-saga/effects'
import PostService from '../../service/post'
import Type from '../../store/action_type/action_type'

function* showPost(action){
  try {
    const post =  yield call(PostService.showPost,action.payload)
    yield put({type:Type.FETCH_SHOW_POSTS_SUCCESS, post:post})
  } catch (error) {
    yield put({type:Type.FETCH_SHOW_POSTS_FAIL,error})
  }
}

export function* watchShowPost(){
  yield takeLatest(Type.FETCH_SHOW_POSTS,showPost)
}