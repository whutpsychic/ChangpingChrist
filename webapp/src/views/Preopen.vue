<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import fc from '@/flutter-core/index.js';

const router = useRouter();

let intervalKey: any = null;

// --------------- created ---------------
const init = async () => {
  // 运行在最前面
  // 如果是web环境则直接跳转走
  const isIphone = navigator.platform === 'iPhone';
  let _isMobile = isIphone;

  if (!_isMobile) {
    router.replace('/home');
    return;
  }
  // ----------------------------
  else {
    fc.init().then((success: Boolean) => {
      if (!!intervalKey) {
        clearInterval(intervalKey);
      }
      router.replace('/home');
    });
  }
}

init();

// 偶尔会掉环，使用这个函数来重新加载
intervalKey = setInterval(() => {
  window.location.reload(true);
}, 800)

</script>