import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router/index'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

/* app.use(ElementPlus, {
  locale: zhCn, // 默认使用英语，更改为中文
  size: 'small', // 设置表单组件默认尺寸
  zIndex: 3000, // 设置弹出组件的层级，默认2000
}) */

app.use(router)

app.mount('#app')
