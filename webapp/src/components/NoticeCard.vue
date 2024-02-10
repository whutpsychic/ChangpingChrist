<!-- 公告板 -->
<template>
  <div class="notice-card-can">
    <p class="title">公告</p>
    <ul>
      <li v-for="(item, i) in props.data">
        <NoticeItem :data="item" :index="i" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import NoticeItem from './NoticeItem.vue';

const props = defineProps({
  data: { type: Array<Object>, default: () => ([]) }
});

</script>
<style scoped>
.notice-card-can {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.2);
}

p.title {
  font-weight: bold;
  font-size: 18px;
  color: goldenrod;
  margin-bottom: 1em;
}

li {
  margin-left: 0.5em;
}
</style>
