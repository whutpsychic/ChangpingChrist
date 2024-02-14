<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import fc from '@/flutter-core/index.js';
import { useSafeHeightStore } from '@/stores/safeHeight';

const router = useRouter();
const safeHeights = useSafeHeightStore();

// --------------- created ---------------
const init = async () => {
  // 运行在最前面
  // 如果是web环境则直接跳转走
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    router.replace('/home');
    return;
  }
  // ----------------------------
  else {
    fc.init().then(() => {
      // 安全高度
      fc.getSafeHeight().then((res: Array<number>) => {
        safeHeights.setup(res);
        router.replace('/home');
      })
    });
  }
}

init();

</script>