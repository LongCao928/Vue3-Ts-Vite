/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createRouter,
  createWebHistory
} from 'vue-router'

import type { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

import loading from '@/utils/loading'


// import Token from '@/services/token'

type ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior']
  left: number
  top: number
}

// 批量导入routes
/* function importAll(webpackContext: __WebpackModuleApi.RequireContext) {
  return webpackContext.keys().map(fileUrl => {
    const body = webpackContext(fileUrl).default
    return body
  })
} */

// const files = importAll(require.context('./routers/', true, /\.ts$/))
// const files = importAll(import.meta.glob("./*/index.ts"))
/* 
const allRouters = Array<RouteRecordRaw>()
for (const key in files) {
  const defaultArr = files[key] as unknown as RouteRecordRaw
  if (Array.isArray(defaultArr)) {
    allRouters.push(...defaultArr)
  }
} */
const allRouters: RouteRecordRaw[] = []
// 导入指定目录下所有符合条件的文件
// import.meta.glob 默认是懒加载，通过动态导入实现
const metaRouters = import.meta.glob("./routers/*.ts", {
  import: 'default', // import 为 default 可以加载默认导出
  eager: true // 直接引入所有的模块
})

console.log('files')
console.log(metaRouters)

/* Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach(key => {
    allRouters.push(...metaRouters[item])
  })
}) */

for (const key in metaRouters) {
  const defaultArr = metaRouters[key] as unknown as RouteRecordRaw
  console.log(metaRouters[key])
  // allRouters.push(...metaRouters[key])
  if (Array.isArray(defaultArr)) {
    allRouters.push(...defaultArr)
  }
  /* metaRouters[key]().then((mod) => {
    allRouters.push(...mod.default)
    console.log(key)
    console.log(mod)
  }) */
}

console.log(allRouters)

const routerInstance = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRouters,
  scrollBehavior(
    to: RouteLocationNormalized,
    _: RouteLocationNormalizedLoaded,
    savedPosition: ScrollPositionNormalized | null
  ) {
    if ((to.meta.savedPosition as boolean) && savedPosition) {
      return savedPosition
    }
    return {
      top: 0,
      left: 0
    }
  }
})

routerInstance.beforeEach((to, _, next) => {
  loading.show()
  if (to.meta) {
    document.title = to.meta.title ? `${to.meta.title}` : 'Vite App'
  }
  // const token = Token.routerGetUserToken()
  /* if (!token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  } */
  next()
})

routerInstance.afterEach(() => {
  loading.hide()
})

export default routerInstance