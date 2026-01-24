import type { RouteRecordRaw } from 'vue-router'

const contentRoutes: RouteRecordRaw = {
  path: '/admin/content',
  component: () => import('@/layouts/index.vue'),
  redirect: '/admin/content/generations',
  name: 'AdminContent',
  meta: {
    title: '内容管理',
    icon: 'document',
    roles: ['ADMIN']
  },
  children: [
    {
      path: 'generations',
      component: () => import('@/views/admin/content/index.vue'),
      name: 'ContentGenerations',
      meta: {
        title: '生成记录',
        icon: 'document'
      }
    }
  ]
}

export default contentRoutes