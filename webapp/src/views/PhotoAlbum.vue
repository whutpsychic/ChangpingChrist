<template>
  <van-nav-bar class="top-nav-bar" :style="`padding-top:${safeHeights.top}px;`" title="选择相册" left-arrow
    @click-left="() => router.back()" />
  <div class="page-content">
    <p style="height: 300px;line-height: 300px;text-align: center;">敬请期待</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSafeHeightStore } from '@/stores/safeHeight';

const router = useRouter();
const safeHeights = useSafeHeightStore();
</script>
