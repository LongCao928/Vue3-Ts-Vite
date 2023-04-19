import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import type Module from '@/config/module'
import type { TRequestType, TParams } from './request.d'

const envType = import.meta.env.DEV
// const BASE_API = import.meta.env.VITE_BASE_API

// 全局默认配置，将作用于每个请求。
// 配置会按照优先级进行合并，首先在 lib/defaults.js 中找到库的默认值
// 然后是实例的 defaults 属性，最后是请求的 config 参数。后面的优先级高于前面。
axios.defaults.baseURL = import.meta.env.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// git rebase -i HEAD~3 合并之前的三次提交
// git push -f 强推

// git reset --soft HEAD~1
// 撤销gitcommit，不撤销git add，保留编辑器改动代码

// git commit --amend 
// 进入vim编辑模式，修改提交注释

declare module 'axios' {
  export interface AxiosRequestConfig {
    module?: string
    loading?: boolean
    noAccessToken?: boolean
    isForm?: boolean
    token?: string
  }
}

/** 请求配置
 * 创建请求时可以用的配置选项，只有 url 是必须的。method 默认 get。
 */

const instance = axios.create({
  // baseURL 自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  baseURL: envType ? '/proxy' : import.meta.env.VITE_BASE_API,
  // 指定请求超时的毫秒数，默认是0(永不超时)。如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 0,
  // 跨域请求时是否需要使用凭证。默认 false
  withCredentials: true,
  // 自定义请求头
  headers: {
    ContentType: 'application/json;charset=utf-8',
    AccessControlAllowOrigin: '*'
  },
  // 请求的服务器url
  // url: '/',
  // method: 'get',
  // transformRequest 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  /* transformRequest: [(data, headers) => {
    // 可以修改请求头。
    console.log(headers)
    return data
  }], */
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  /* transformResponse: [(data) => {
    return data
  }], */
  // 与请求一起发送的 URL 参数, 必须是一个简单对象或 URLSearchParams 对象
  /* params: {
    ID: 213
  }, */
  // 作为请求体被发送的数据，仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: FormData, File, Blob
  // - Node 专属: Stream, Buffer
  // data: {},
  // 浏览器将要响应的数据类型
  responseType: 'json', // 默认值
  // responseEncoding 用于解码响应的编码 (Node.js 专属)
  // responseEncoding: 'utf8', // 默认值
  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // 默认值
  // `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认值
  // `auth` HTTP Basic Auth
  /* auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  }, */
  // 定义代理服务器的主机名，端口和协议。
  /* proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  }, */

  // `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数
  //  maxContentLength: 2000,

  // `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数
  //  maxBodyLength: 2000,
})

const myIntercptors = instance.interceptors.request.use((config) => {
  console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

// 移除请求拦截器
axios.interceptors.request.eject(myIntercptors)

instance.interceptors.response.use((response: AxiosResponse) => {
  console.log(response)
  const { data } = response
  console.log(data)
  return response
}, error => {
  return Promise.reject(error)
})

/**
 * 响应结构
 */
/* {
  // 服务器提供的响应
  data: { },
  // 服务器响应的 HTTP 状态码
  status: 200,
  // 服务器响应的 HTTP 状态信息
  statusText: 'OK',
  // 服务器响应头，有的 header 名称都是小写，而且可以使用方括号语法访问：
  // 例如: `response.headers['content-type']`
  headers: { },
  // `axios` 请求的配置信息
  config: { },
  // 生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  request: { }
} */

// 默认情况下，axios 将 JavaScript 对象序列化为 JSON。要以 application/x-www-form-urlencoded 格式发送数据。
// 在浏览器中，可以使用
// 1. URLSearchParams API: const params = new URLSearchParams(); params.append('param1', 'value1')
// 2. qs 库编码数据: qs.stringify()
// 在 nodejs 中可以使用 
// 1. querystring 模块: querystring.stringify
// 2. 从'url module'中使用'URLSearchParams': const url = require('url');const params = new url.URLSearchParams({ foo: 'bar' });
// 2. form-data 库: const FormData = require('form-data');const form = new FormData();form.append('my_field', 'my value');

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

// const controll = new AbortController()
// axios.get('/url')
// 取消请求
// controll.abort()

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