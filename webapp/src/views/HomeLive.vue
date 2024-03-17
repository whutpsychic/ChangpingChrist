<template>
  <div class="page-content">
    <!-- 顶部占位符 -->
    <div style="height:10px;" />
    <LiveVideoCard title="礼拜&祷告" url="http://45734.wx.cdn.aodianyun.com/layout/party/37305"
      info="每周日上午 9:00 至 10:30 主日礼拜；每周三晚祷告。" :living="living" />
    <!-- 底部占位符 -->
    <div style="height:40px;" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LiveVideoCard from '@/components/LiveVideoCard.vue';
import api from '@/api/main';

const living = ref(false);

onMounted(() => {
  api.getLiveState().then((lv: boolean) => {
    living.value = lv;
  });
});
</script>