// 导入方法：创建router实例对象，创建history模式的路由（即URL中不带 #）
import { createRouter, createWebHistory } from 'vue-router'
// 导入页面组件
import Login from '@/views/Login/login.vue'
import Layout from '@/views/Layout/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由表：配置path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout
    },
    {
      path: '/login',
      component: Login
    },
  ],
})

export default router
