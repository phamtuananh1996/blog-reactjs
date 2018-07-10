import Posts from './post/post'
import PostDetail from './post/post_detail'
import { combineReducers } from 'redux';

let allReducer = combineReducers({
  PostDetail,
  Posts
  
})

export default allReducer