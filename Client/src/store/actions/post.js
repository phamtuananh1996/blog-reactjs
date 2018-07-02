import Type from '../action_type/action_type'

export default {
  sort : (flag)=>{
    return {
      type: Type.SORT,
      payload: flag
    }
  }
}