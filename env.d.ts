/// <reference types="vite/client" />

/* declare interface ImportMetaEnv {
  readonly VITE_BASE_API: string
  readonly VITE_APP_NAME: string
} */

declare type myString = string

// 泛型对象字典
declare type TDictObject<T> = {
  [key: string]: T
}

// 任意类型
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type TAny = any

// 任意类型对象
declare type TAnyType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// 任意类型数组
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type TAnyArray = Array<any>

// 泛型数组
declare type TDictArray<T> = Array<T>

// 任意函数
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type TAnyFunc = (...args: any[]) => any


declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}

declare module 'element-plus/dist/locale/zh-cn.mjs'