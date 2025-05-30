export const routes = [
  {
    path: '/',
    name: 'Home',
    component: async () => import('@/pages/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: async () => import('@/pages/Login.vue'),
  },
]
