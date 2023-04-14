import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
console.log('app.vue')
console.log(router)
app.use(router)

app.mount('#app')
