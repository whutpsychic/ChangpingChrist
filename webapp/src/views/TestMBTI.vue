<template>
  <van-nav-bar safe-area-inset-top title="MBTI 性格测试" left-arrow @click-left="backup" />

  <van-popup v-model:show="showPopup" position="bottom" :style="{ height: 'calc(100% - 50px)' }">
    <p class="title">MBTI 性格测试</p>
    <div class="page-content">
      <p class="prehead">• 精力支配：外向 E — 内向 I</p>
      <p class="prehead">• 认识世界：实感 S — 直觉 N</p>
      <p class="prehead">• 判断事物：思维 T — 情感 F</p>
      <p class="prehead">• 生活态度：判断 J — 知觉 P</p>
      <div style="height:10px;"></div>
      <p class="description">你天生的个性是什么呢?从个性测验中你可以找到一些线索，虽然它没有像梅尔博士的性向测验那样复杂精密，但至少它提供了有用的的工具，使你能开始了解自己的个性。</p>
      <p class="description">本测验题以The Keirsey & Johnson Temperament Sorter(柯西与强生个性性向量表)为主，加上Celebrate my Soul一书作者Dr.
        Reginald Johnson上课讲义与笔者所设计的题目综合编着而成。</p>
      <div class="operator">
        <van-button type="primary" @click="showPopup = false">开始测试</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { showConfirmDialog } from 'vant';

const router = useRouter();
const showPopup = ref(true);

const backup = () => {
  showConfirmDialog({
    title: '警告',
    message:
      '如果您现在退出的话，将不会保留您之前的答题记录，确认退出吗？',
  })
    .then(() => {
      // on confirm
      router.back();
    })
    .catch(() => {
      // on cancel
    });
}




</script>

<style scoped>
.page-content {
  background-color: white;
  padding: 20px;
}

p.title {
  font-size: 20px;
  font-weight: bold;
  margin: 1em 0;
  text-align: center;
}

p.prehead {
  font-size: 18px;
  margin-bottom: 1em;
}

p.description {
  font-size: 16px;
  text-indent: 2em;
  line-height: 1.5em;
  margin-bottom: 0.8em;
}

.operator {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
</style>