import posts from '../../states/post/post'
import Type from '../../action_type/action_type'
export default (state = { posts }, action) => {
  switch (action.type) {
    case Type.FETCH_POSTS_SUCCESS:
      return action.payload;
      break;
    case Type.FETCH_POSTS_FAIL:
      return [];
      break;
    default:
      return []
      break;
  }
}