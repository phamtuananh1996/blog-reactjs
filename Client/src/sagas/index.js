import {all} from 'redux-saga/effects'
import {watchFetchPost} from './post/fetch'

export default function* rootSaga() {
  yield all([
    watchFetchPost()
  ])
}