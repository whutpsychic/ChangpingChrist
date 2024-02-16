import { createRouter, createWebHashHistory } from 'vue-router';
import Preopen from '../views/Preopen.vue';
import Home from '../views/Home.vue';
import HomeInfo from '../views/HomeInfo.vue';
// import HomeLive from '../views/HomeLive.vue';
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
          // 资讯
          path: '/home/info',
          component: HomeInfo,
        },
        // 直播
        {
          path: '/home/live',
          // component: HomeLive,
          component: () => import('../views/HomeLive.vue'),
        },
        // 娱乐
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
    },
    // 所有测试页
    {
      path: '/all-tests',
      component: () => import('../views/AllTests.vue'),
    },
    // 相册选择页
    {
      path: '/photo-album',
      component: () => import('../views/PhotoAlbum.vue'),
    }
  ]
})

export default router
