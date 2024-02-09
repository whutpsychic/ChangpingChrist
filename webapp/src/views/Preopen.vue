<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import fc from '@/flutter-core/index.js';
import { useSafeHeightStore } from '@/stores/safeHeight';

const router = useRouter();
const safeHeights = useSafeHeightStore();

let intervalKey: any = null;

// --------------- created ---------------
const init = async () => {
  // 运行在最前面
  // 如果是web环境则直接跳转走
  const isIphone = navigator.platform === 'iPhone';
  let _isMobile = isIphone
  if (!_isMobile) {
    router.replace('/home');
    return;
  }
  // ----------------------------
  else {
    fc.init().then((success: Boolean) => {
      console.log(`------------------------------init: ${success}`)
      // 安全高度
      fc.await("getSafeHeight", (res: Array<number>) => {
        safeHeights.setup(res);
        clearInterval(intervalKey);
        router.replace('/home');
      });
      fc.getSafeHeight();
    });
  }
}

init();

// 偶尔会掉环，使用这个函数来重新加载
intervalKey = setInterval(() => {
  window.location.reload(true);
}, 800)

</script>