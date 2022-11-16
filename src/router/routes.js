
const routes = [
  {
    path: '/',
    component: () => import('pages/GreatingPage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
