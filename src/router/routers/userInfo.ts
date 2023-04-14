export default [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserView.vue'),
    meta: {
      title: 'user'
    }
  }
]