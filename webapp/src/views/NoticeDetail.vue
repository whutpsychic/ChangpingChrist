<template>
  <van-nav-bar class="top-nav-bar" :style="`padding-top:${safeHeights.top}px;`" title="通知" left-arrow @click-left="onClickLeft" />
  <div class="page-content">
    <p class="title">{{ mainData.title }}</p>
    <p class="date">{{ `发表于 ${mainData.date}` }}</p>
    <p class="content">{{ mainData.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import noticeData from '@/db/notifications.json';
import { useSafeHeightStore } from '@/stores/safeHeight';

const safeHeights = useSafeHeightStore();

const route = useRoute();
const router = useRouter();

const mainData = reactive({
  "title": "",
  "content": "",
  "date": "",
});

const _loadNoticeByIndex = () => {
  let i = route.query.index;
  const target = noticeData[i as unknown as number];
  mainData.title = target.title;
  mainData.content = target.content;
  mainData.date = target.date;
}

const onClickLeft = () => {
  router.back();
}

_loadNoticeByIndex();

</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
}

.date {
  font-size: 16px;
  color: #aaa;
  margin: 1em 0;
}

.content {
  padding: 10px 20px;
  padding-top: 0;
  font-size: 17px;
  line-height: 1.8em;
  letter-spacing: 2px;
  text-indent: 2em;
}
</style>