<template>
  <main>
    <van-nav-bar safe-area-inset-top title="神就是爱" />
    <router-view></router-view>
    <van-tabbar safe-area-inset-bottom v-model="active" @change="onChangTab">
      <van-tabbar-item icon="newspaper-o" name="info">资讯</van-tabbar-item>
      <van-tabbar-item icon="video-o" name="live">直播</van-tabbar-item>
      <van-tabbar-item icon="fire-o" name="entertainment">娱乐</van-tabbar-item>
    </van-tabbar>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

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