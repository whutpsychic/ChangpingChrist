<template>
  <van-nav-bar class="top-nav-bar" :style="`padding-top:${safeHeights.top}px;`" title="恩赐调查表" left-arrow @click-left="() => router.back()" />
  <div class="page-content">
    <ul>
      <li>
        <TestCard name="MBTI" title="MBTI性格测试" subtitle="Myers-Briggs Type Indicator 只有你是你，天生个性，了解自己。">
          <template #icon>
            <img alt="." src="@/assets/img/icon-mbti.png" style="width:100%;" />
          </template>
        </TestCard>
      </li>
      <li>
        <TestCard name="grace" title="恩赐调查表" subtitle="你的信仰，你的灵命。">
          <template #icon>
            <img alt="." src="@/assets/img/icon-cross.webp" style="width:100%;" />
          </template>
        </TestCard>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSafeHeightStore } from '@/stores/safeHeight';
import TestCard from '@/components/TestCard.vue';

const router = useRouter();
const safeHeights = useSafeHeightStore();
</script>
