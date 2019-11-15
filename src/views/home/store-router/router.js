export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.index.vue'),
    meta: {
      requiresAuth: true,
      title: '首页'
    }
    // children: [
    //   {
    //     path: 'about',
    //     name: 'homeName-about',
    //     component: () => import('@/views/home/pages/about/About.index.vue'),
    //     meta: {
    //       requiresAuth: true,
    //       title: '关于我'
    //     }
    //   }
    // ]
  }
]
