export const Menus = [
  {
    path: '/system',
    name: '系统管理',
    children: [
      {
        path: '/system/user',
        name: '用户信息',
        component: () => import('@/views/system/user/index.vue')
      },
      {
        path: '/system/task',
        name: '任务管理',
        component: () => import('@/views/system/task/index.vue')
      },
    ]
  },
];