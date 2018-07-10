import {HTTP} from '../config_axios'
export default {
  fetchPost () {
    return HTTP.get('posts').then(response => response.data)   
  },

  showPost (id) {
    return HTTP.get('posts/'+ id).then(response => response.data)   
  }
}