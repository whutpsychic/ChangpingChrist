import { createRouter, createWebHashHistory } from 'vue-router';
import Preopen from '../views/Preopen.vue';
import Home from '../views/Home.vue';
import Info from '../views/Info.vue';

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
          component: () => import('../views/Live.vue'),
        },
        {
          path: '/home/entertainment',
          component: () => import('../views/Entertainment.vue'),
        }
      ]
    },
    // 通知细节页
    {
      path: '/notice',
      component: () => import('../views/NoticeDetail.vue'),
    },
    // MBTI测试
    {
      path: '/MBTI',
      component: () => import('../views/TestMBTI.vue'),
    }
  ]
})

export default router
