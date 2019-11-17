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
        path: 'graph-circular',
        name: 'echarts-graph-circular',
        component: () => import('@/views/echarts/pages/graph-circular/GraphCircular.index.vue'),
        meta: {
          requiresAuth: true,
          title: '关系图标'
        }
      }
    ]
  }
]
