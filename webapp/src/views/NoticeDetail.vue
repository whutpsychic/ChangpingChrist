<template>
  <van-nav-bar title="通知" :style="`padding-top:${safeHeights.top}px;`" left-arrow @click-left="onClickLeft" />
  <div class="page-content">
    <p class="title">{{ mainData.title }}</p>
    <p class="date">{{ `发表于${mainData.date}` }}</p>
    <p class="content">{{ mainData.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useSafeHeightStore } from '@/stores/safeHeight';
import noticeData from '@/db/notifications.json';
import router from '@/router';

const safeHeights = useSafeHeightStore();
const route = useRoute();

const mainData = reactive({
  "title": "",
  "content": "",
  "date": "",
});

const _loadNoticeByIndex = () => {
  let i = route.query.index;
  const target = noticeData[i];
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
p {
  font-family: 'HanYi';
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
}

.date {
  font-size: 18px;
  color: #aaa;
  margin: 1em 0;
}

.content {
  font-size: 20px;

}
</style>