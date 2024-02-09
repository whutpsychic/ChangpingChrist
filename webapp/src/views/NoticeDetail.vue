<template>
  <van-nav-bar safe-area-inset-top title="通知" left-arrow @click-left="onClickLeft" />
  <div class="page-content">
    <p class="title">{{ mainData.title }}</p>
    <p class="date">{{ `发表于${mainData.date}` }}</p>
    <p class="content">{{ mainData.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import noticeData from '@/db/notifications.json';

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