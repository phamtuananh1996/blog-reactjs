import Type from '../action_type/action_type'

export default {
  sort : (flag)=>{
    return {
      type: Type.SORT,
      payload: flag
    }
  },

  fetch: ()=>{
    return {
      type: Type.FETCH_POSTS
    }
  },

  fetchSuccessAction: (payload) => {
    return {
      type: Type.FETCH_POSTS_SUCCESS,
      payload
    }
  }
}