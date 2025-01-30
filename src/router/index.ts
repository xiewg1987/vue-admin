import { createRouter, createWebHistory } from 'vue-router';
import { Menus } from './views';

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
    children: Menus,
    component: () => import('@/views/home/home.vue')
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

// 路由守卫
router.beforeEach((to, _, next) => {
  if (to.path !== '/login' && !localStorage.getItem('token')) {
    return next('/login');
  }
  next();
});

export default router;