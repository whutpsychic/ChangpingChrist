<template>
  <van-nav-bar safe-area-inset-top title="MBTI 性格测试" left-arrow @click-left="backup" />
  <!-- 初始遮罩层 -->
  <van-popup v-model:show="showPreInfo" position="bottom" :style="{ height: 'calc(100% - 50px)' }">
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
        <van-button type="primary" @click="showPreInfo = false">开始测试</van-button>
      </div>
    </div>
  </van-popup>
  <!-- 做题过程 -->
  <div class="main-body">
    <p class="question-body">{{ `${qIndex + 1}. ${questions[qIndex].question}` }}</p>
    <!-- 仅两个选项 -->
    <div :class="`selector-can${answer === 'A' ? ' active' : ''}`" @click="answer = 'A'">
      <span>{{ `A. ${questions[qIndex].A}` }}</span>
    </div>
    <div :class="`selector-can${answer === 'B' ? ' active' : ''}`" @click="answer = 'B'">
      <span>{{ `B. ${questions[qIndex].B}` }}</span>
    </div>
    <div style="height:40px;"></div>
    <div class="nextbtn">
      <van-button type="primary" @click="next" block :disabled="!answer" size="large">
        {{ _isLastQuestion ? `交卷并查看答案` : `下一题` }}
      </van-button>
    </div>
  </div>
  <!-- 查看答案 -->
  <van-popup v-model:show="showAnswer" position="bottom" :style="{ height: 'calc(100% - 50px)' }">
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
        <van-button type="primary" @click="showAnswer = false">开始测试</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref, unref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { showConfirmDialog } from 'vant';
import questions from '@/db/MBTI_questions.json';

const router = useRouter();
// 显示初始遮罩层
const showPreInfo = ref(false);
// 当前题号
const qIndex = ref(0);
// 答案记录器组
const answers = [];
// 当前题答案
const answer = ref('');
// 显示题答案计算结果
const showAnswer = ref(false);

// 后退事件
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

// 判断是否是最后一题
const _isLastQuestion = computed(() => {
  return unref(qIndex) >= questions.length - 1;
});

const next = () => {
  // 记录答案
  answers.push({ index: unref(qIndex) + 1, a: unref(answer) });
  // 清除当前答案
  answer.value = '';
  // ---------------
  // 交卷并查看答案
  if (unref(_isLastQuestion)) {
    showAnswer.value = true;







    
  }
  // 下一题
  else {
    qIndex.value++;
    // alert(JSON.stringify(answers))
  }
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

/* ------------------------------------------------------ */
.main-body {
  min-height: calc(100vh - 140px);
  padding: 20px;
}

p.question-body {
  font-size: 20px;
  font-weight: bold;
}

.selector-can {
  font-size: 18px;
  margin: 3em 0em;
  padding: 2em 1em;
  background-color: white;
  border: solid 1px #eee;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: .3s;
}

.selector-can.active {
  border: solid 1px greenyellow;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.3);
}

.selector-can span {
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 1px;
}

.nextbtn {
  position: fixed;
  width: calc(100vw - 40px);
  bottom: 40px;
}
</style>