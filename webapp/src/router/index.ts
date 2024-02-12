import { createRouter, createWebHashHistory } from 'vue-router';
import Preopen from '../views/Preopen.vue';
import Home from '../views/Home.vue';
import Info from '../views/HomeInfo.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 默认导向准备页
    {
      path: '/',
      redirect: '/preopen'
    },
    // 默认走向第一个标签页
    {
      path: '/home',
      redirect: '/home/info'
    },
    // ------------------------------------------------------
    // 准备页
    {
      path: '/preopen',
      component: Preopen,
    },
    // 主页
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/info',
          component: Info,
        },
        {
          path: '/home/live',
          component: () => import('../views/HomeLive.vue'),
        },
        {
          path: '/home/entertainment',
          component: () => import('../views/HomeEntertainment.vue'),
        }
      ]
    },
    // 通知细节页
    {
      path: '/notice-detail',
      component: () => import('../views/NoticeDetail.vue'),
    },
    // MBTI测试
    {
      path: '/test-MBTI',
      component: () => import('../views/TestMBTI.vue'),
    },
    // 恩赐调查表
    {
      path: '/test-grace',
      component: () => import('../views/TestGrace.vue'),
    }
  ]
})

export default router
