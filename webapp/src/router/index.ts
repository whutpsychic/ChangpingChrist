import { createRouter, createWebHashHistory } from 'vue-router';
import Preopen from '../views/Preopen.vue';
import Home from '../views/Home.vue';
import HomeInfo from '../views/HomeInfo.vue';
import HomeLive from '../views/HomeLive.vue';
import HomeEntertainment from '../views/HomeEntertainment.vue';

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
          component: HomeInfo,
        },
        {
          path: '/home/live',
          component: HomeLive,
        },
        {
          path: '/home/entertainment',
          component: HomeEntertainment,
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
