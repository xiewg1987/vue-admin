import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login' // 重定向到login
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/:catchAll(.*)', // 404页面
    meta: { closeTab: true },
    component: () => import('@/views/not-found/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;