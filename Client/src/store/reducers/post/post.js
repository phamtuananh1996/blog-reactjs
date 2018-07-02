import posts from '../../states/post/post'
import Type from '../../action_type/action_type'
export default (state = {posts}, action) => {
  switch (action.type) {
    case Type.SORT:
        return [];
      break;
  
    default:
        return state.posts
      break;
  }
}