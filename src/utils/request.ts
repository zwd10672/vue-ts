import axios from 'axios'
import { Toast } from 'vant'
let baseURL = '/api'
const service = axios.create({
  baseURL,
  timeout: 10000,
})
service.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.params = {
        token: token,
      }
    }
    return config
  },
  error => Promise.reject(error),
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.success || 'Error'))
    } else {
      if (res.code == 200) {
        return res.result || res.data
      } else {
        new Toast(res.success)
      }
    }
  },
  error => {
    return Promise.reject(error)
  },
)
export default service
