export default [
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('@/views/echarts/Echarts.index.vue'),
    meta: {
      requiresAuth: true,
      title: '图表'
    },
    children: [
      {
        path: 'about',
        name: 'homeName-about',
        component: () => import('@/views/echarts/pages/about/About.index.vue'),
        meta: {
          requiresAuth: true,
          title: '图表信息'
        }
      }
    ]
  }
]
