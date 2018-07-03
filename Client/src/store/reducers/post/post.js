import posts from '../../states/post/post'
import Type from '../../action_type/action_type'
export default (state = {posts}, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
        return action.payload;
      break;
    case 'FETCH_POSTS':
      return [];
    break;
    default:
        return state.posts
      break;
  }
}