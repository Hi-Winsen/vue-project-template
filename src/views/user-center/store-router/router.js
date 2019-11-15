export default [
  {
    path: '/user-center',
    name: 'user-center',
    component: () => import('@/views/user-center/UserCenter.index.vue'),
    meta: {
      requiresAuth: true,
      title: '用户中心'
    },
    children: [
      {
        path: 'about',
        name: 'homeName-about',
        component: () => import('@/views/user-center/pages/about/About.index.vue'),
        meta: {
          requiresAuth: true,
          title: '用户信息'
        }
      }
    ]
  }
]
