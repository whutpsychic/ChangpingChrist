<template>
  <main>
    <van-nav-bar :style="`padding-top:${safeHeights.top}px;`">
      <template #title>
        <p class="topbar-title">神就是爱</p>
      </template>
    </van-nav-bar>
    <router-view></router-view>
    <van-tabbar :style="`padding-bottom:${safeHeights.bottom}px;`" v-model="active" @change="onChangTab">
      <van-tabbar-item icon="newspaper-o" name="info">资讯</van-tabbar-item>
      <van-tabbar-item icon="video-o" name="live">直播</van-tabbar-item>
      <van-tabbar-item icon="fire-o" name="entertainment">娱乐</van-tabbar-item>
    </van-tabbar>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';
import { useSafeHeightStore } from '@/stores/safeHeight';

const route = useRoute();
const router = useRouter();

const safeHeights = useSafeHeightStore();

const active = ref('info');

// 切换tab事件
const onChangTab = (tab: string) => {
  router.replace(`/home/${tab}`)
}

// 根据当前url矫正tab
const correctTabByUrl = () => {
  const urlStr = route.fullPath;

  switch (urlStr) {
    case '/home/info':
      active.value = 'info';
      break;
    case '/home/live':
      active.value = 'live';
      break;
    case '/home/entertainment':
      active.value = 'entertainment';
      break;
    default:
      router.replace(`/home/info`)
      break;
  }
}

correctTabByUrl();
</script>