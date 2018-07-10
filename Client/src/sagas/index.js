import {all} from 'redux-saga/effects'
import {watchFetchPost} from './post/fetch'
import {watchShowPost} from './post/show'

export default function* rootSaga() {
  yield all([
    watchFetchPost(),
    watchShowPost()
  ])
}