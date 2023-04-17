export default [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserView.vue'),
    meta: {
      title: 'user'
    }
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('@/views/UseAxios.vue'),
    meta: {
      title: 'useAxios'
    }
  },
]