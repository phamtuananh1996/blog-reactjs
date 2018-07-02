import axios from 'axios'

var host = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : ''
var version = 'v1'
var type = 'api'
var URL_API = host + '/' + type + '/' + version + '/'

const api = axios.create({
  baseURL: URL_API,
  transformRequest: [function (data, headers) {
    // headers['Authorization'] = 'Bearer ' + helper.getToken()
    headers['Content-Type'] = 'application/json'
    if (data instanceof FormData) {
      return data
    }
    return JSON.stringify(data)
  }]
})
api.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // if (error.response.status === 505) {
  //   helper.clearLocalStorage()
  //   router.push('/login')
  // }
  // if (error.response.status === 403) {
  //   swal('Rất tiếc!', 'Bạn không đủ quyền!', 'error')
  // }
  // if (error.response.status === 404) {
  //   swal('Rất tiếc!', 'Model này không tồn tại trong csdl!', 'error')
  // }
  // if (error.response.status === 500) {
  //   swal('Rất tiếc!', 'Đã sảy ra lỗi!', 'error')
  // }
  return Promise.reject(error.response)
})
export const HTTP = api
