export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.index.vue'),
    meta: {requiresAuth: true},
    children: [
      {
        path: 'about',
        name: 'homeName-about',
        component: () => import('@/views/home/sub-pages/about/About.index.vue'),
        meta: {requiresAuth: true}
      }
    ]
  }
]
