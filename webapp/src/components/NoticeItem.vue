<!-- 公告条目 -->
<template>
  <div class="notice-item" @click="_gotoNoticeDetail">
    <div class="left-icon">
      <img v-if="props.data.icon === 1" class="icon" alt="." src="@/assets/img/icon-notice1.jpg" />
      <img v-if="props.data.icon === 2" class="icon" alt="." src="@/assets/img/icon-notice2.jpg" />
      <img v-if="props.data.icon === 3" class="icon" alt="." src="@/assets/img/icon-notice3.webp" />
    </div>
    <div class="right-content">
      <p class="title">{{ props.data.snapshot }}</p>
      <p class="date">{{ props.data.date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  data: { type: Object, default: () => ({}) },
  index: { type: Number, default: 0 },
});

const router = useRouter();

const _gotoNoticeDetail = () => {
  router.push({ path: '/notice', query: { index: props.index } })
}


</script>
<style scoped>
.notice-item {
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
}

.left-icon {
  width: 50px;
  height: 50px;
  margin-right: 1em;
}

.icon {
  width: 50px;
  height: 50px;
}

.right-content {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex-basis: calc(100% - 40px - 1em);
}

.right-content .title {
  flex-basis: 100%;
}

.right-content .date {
  color: #999;
}
</style>
