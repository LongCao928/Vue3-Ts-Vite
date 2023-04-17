import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import type Module from '@/config/module'
import type { TRequestType, TParams } from './request.d'

const envType = import.meta.env.DEV
// const BASE_API = import.meta.env.VITE_BASE_API

axios.defaults.baseURL = import.meta.env.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


declare module 'axios' {
  export interface AxiosRequestConfig {
    module?: string
    loading?: boolean
    noAccessToken?: boolean
    isForm?: boolean
    token?: string
  }
}

const instance = axios.create({
  baseURL: envType ? '/proxy' : import.meta.env.VITE_BASE_API,
  timeout: 0,
  withCredentials: true,
  headers: {
    ContentType: 'application/json;charset=utf-8',
    AccessControlAllowOrigin: '*'
  }
})

// 配置会按照优先级进行合并，首先在 lib/defaults.js 中找到库的默认值
// 然后是实例的 defaults 属性，最后是请求的 config 参数。后面的优先级高于前面。

instance.interceptors.request.use((config) => {
  console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response: AxiosResponse) => {
  console.log(response)
  const { data } = response
  console.log(data)
  return response
}, error => {
  return Promise.reject(error)
})


function makeUrl(type: TRequestType, module: Module, path: string, data?: TParams) {

  // const host = envType ? '/proxy' : BASE_API
  if (path[0] !== '/') path = `/${path}`
  // console.log(data)
  data = data || {}
  // console.log(data)
  // console.log(qs.stringify(data))
  if (type === 'get') {
    // return `${module}${path}?${qs.stringify(data)}`
    return `${path}?${qs.stringify(data)}`
  }
  // return `${module}${path}`
  return `${path}`
}


export default {
  async get(module: Module, path: string, data?: TDictObject<TAny>, config?: Partial<AxiosRequestConfig>) {
    const url = makeUrl('get', module, path, data)
    return instance.get(url, config || {})
  },
  async post(module: Module, path: string, data?: TDictObject<TAny>, config?: Partial<AxiosRequestConfig>) {
    const url = makeUrl('post', module, path, data)
    return instance.post(url, data, config || {})
  }
}