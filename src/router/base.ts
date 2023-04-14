
export default [
  /* {
    path: '/',
    redirect: '/login'
  }, */
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/base/NotFount.vue'),
    meta: {
      title: 'notfound'
    }
  },
]