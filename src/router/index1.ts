import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import base from './base'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...base,
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        showLeft: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        showLeft: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue')
    }
  ]
})

export default router
