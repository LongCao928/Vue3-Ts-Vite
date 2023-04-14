
// const baseRouter = []


export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/base/NotFount.vue'),
    meta: {
      title: 'notfound'
    }
  }
]