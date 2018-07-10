import Type from '../../action_type/action_type'

const postDetailInitialState = {}
export default (state = postDetailInitialState, action) => {
  switch (action.type) {
    case Type.FETCH_SHOW_POSTS_SUCCESS:
      return action.post;
    default:
      return state
  }
}