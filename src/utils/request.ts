import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    ContentType: 'application/json;charset=utf-8',
    AccessControlAllowOrigin: '*'
  }
})

instance.interceptors.request.use((config) => {
  console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  console.log(response)
  const { data } = response
  return data
}, error => {
  return Promise.reject(error)
})


export default {
  async get(path: string) {
    return instance.get(path)
  },
  async post(path: string) {
    return instance.post(path, {})
  }
}