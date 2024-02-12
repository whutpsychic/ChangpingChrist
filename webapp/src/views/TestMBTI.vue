<template>
  <van-nav-bar safe-area-inset-top title="MBTI 性格测试" left-arrow @click-left="backup" />
  <!-- 初始遮罩层 -->
  <van-popup v-model:show="showPreInfo" position="bottom" :style="{ height: 'calc(100%)' }">
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
  <van-popup v-model:show="showAnswer" position="right">
    <div class="page-content result-pan">
      <p class="title">您的 MBTI 测试结果</p>
      <van-button type="primary" block @click="showDetails = !showDetails">
        {{ showDetails ? `隐藏细节` : `显示细节` }}
      </van-button>
      <div style="height: 20px;" />
      <div :class="`${showDetails ? 'details' : 'details hide'}`">
        <p class="content">您的答题情况（共计91题）：</p>
        <p class="content">选A的题目：{{ _allAQuestions.join('、') }}</p>
        <p class="content">选B的题目：{{ _allBQuestions.join('、') }}</p>
      </div>

      <div class="calculated-bar">
        <div class="twice-group-can">
          <p class="upper-letter">E -> {{ scoreE }}</p>
          <p class="upper-letter">I -> {{ scoreI }}</p>
        </div>
        <p class="upper-letter"> -> {{ scoreE >= scoreI ? 'E' : 'I' }}</p>
        <div class="msk" :style="`left:${showE_I ? '100%' : '0'}`"></div>
      </div>

      <div class="calculated-bar">
        <div class="twice-group-can">
          <p class="upper-letter">S -> {{ scoreS }}</p>
          <p class="upper-letter">N -> {{ scoreN }}</p>
        </div>
        <p class="upper-letter"> -> {{ scoreS >= scoreN ? 'S' : 'N' }}</p>
        <div class="msk" :style="`left:${showS_N ? '100%' : '0'}`"></div>
      </div>

      <div class="calculated-bar">
        <div class="twice-group-can">
          <p class="upper-letter">T -> {{ scoreT }}</p>
          <p class="upper-letter">F -> {{ scoreF }}</p>
        </div>
        <p class="upper-letter"> -> {{ scoreT >= scoreF ? 'T' : 'F' }}</p>
        <div class="msk" :style="`left:${showT_F ? '100%' : '0'}`"></div>
      </div>

      <div class="calculated-bar">
        <div class="twice-group-can">
          <p class="upper-letter">J -> {{ scoreJ }}</p>
          <p class="upper-letter">P -> {{ scoreP }}</p>
        </div>
        <p class="upper-letter"> -> {{ scoreJ >= scoreP ? 'J' : 'P' }}</p>
        <div class="msk" :style="`left:${showJ_P ? '100%' : '0'}`"></div>
      </div>

      <div class="calculated-bar should-wrap">
        <p class="result-text">
          您的测试结果为：
          <span>{{ result }}</span>
        </p>
        <table class="result-tb">
          <tr>
            <td>思考型</td>
            <td :class="result === 'ISTP' ? `is-result` : ''">ISTP</td>
            <td :class="result === 'INTP' ? `is-result` : ''">INTP</td>
            <td :class="result === 'ESTJ' ? `is-result` : ''">ESTJ</td>
            <td :class="result === 'ENTJ' ? `is-result` : ''">ENTJ</td>
          </tr>
          <tr>
            <td>感觉型</td>
            <td :class="result === 'ISFP' ? `is-result` : ''">ISFP</td>
            <td :class="result === 'INFP' ? `is-result` : ''">INFP</td>
            <td :class="result === 'ENFJ' ? `is-result` : ''">ENFJ</td>
            <td :class="result === 'ESFJ' ? `is-result` : ''">ESFJ</td>
          </tr>
          <tr>
            <td>官觉型</td>
            <td :class="result === 'ISTJ' ? `is-result` : ''">ISTJ</td>
            <td :class="result === 'ISFJ' ? `is-result` : ''">ISFJ</td>
            <td :class="result === 'ESTP' ? `is-result` : ''">ESTP</td>
            <td :class="result === 'ESFP' ? `is-result` : ''">ESFP</td>
          </tr>
          <tr>
            <td>直觉型</td>
            <td :class="result === 'INTJ' ? `is-result` : ''">INTJ</td>
            <td :class="result === 'INFJ' ? `is-result` : ''">INFJ</td>
            <td :class="result === 'ENTP' ? `is-result` : ''">ENTP</td>
            <td :class="result === 'ENFP' ? `is-result` : ''">ENFP</td>
          </tr>
        </table>
        <div class="msk" :style="`left:${showResult ? '100%' : '0'}`"></div>
      </div>
      <van-button type="primary" :class="showBackBtn ? 'backbtn' : 'backbtn hide'" block
        @click="router.back();">返回</van-button>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref, unref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { showConfirmDialog } from 'vant';
import questions from '@/db/questions/MBTI.json';

const router = useRouter();
// 显示初始遮罩层
const showPreInfo = ref(true);
// 当前题号
const qIndex = ref(0);
// 答案记录器组
const answers: Array<Answerobj> = [];
// 当前题答案
const answer = ref('');
// 显示题答案计算结果
const showAnswer = ref(false);
const showDetails = ref(true);

const showE_I = ref(false);
const showS_N = ref(false);
const showT_F = ref(false);
const showJ_P = ref(false);
const showResult = ref(false);
const showBackBtn = ref(false);

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

// ------------------------------- computed -------------------------------
// 判断是否是最后一题
const _isLastQuestion = computed(() => {
  return unref(qIndex) >= questions.length - 1;
});

// 所有选A的题号
const _allAQuestions = computed(() => {
  return answers.filter((item) => { return item.a === 'A' }).map((item) => {
    return item.index;
  });
});

// 所有选B的题号
const _allBQuestions = computed(() => {
  return answers.filter((item) => { return item.a === 'B' }).map((item) => {
    return item.index;
  });
});

// ======= 分类计算的题号 =======
const scored_EI_Qeuss = [1, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85];
const scored_SN1_Qeuss = [2, 9, 16, 23, 30, 37, 44, 51, 58, 65, 72, 79, 86];
const scored_SN2_Qeuss = [3, 10, 17, 24, 31, 38, 45, 52, 59, 66, 73, 80, 87];
const scored_TF1_Qeuss = [4, 11, 18, 25, 32, 39, 46, 53, 60, 67, 74, 81, 88];
const scored_TF2_Qeuss = [5, 12, 19, 26, 33, 40, 47, 54, 61, 68, 75, 82, 89];
const scored_JP1_Qeuss = [6, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90];
const scored_JP2_Qeuss = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91];

// ======= E 类得分情况 =======
const scoreE = computed(() => {
  let result = 0;
  scored_EI_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'A')) {
      result++;
    }
  })
  return result;
})

// ======= I 类得分情况 =======
const scoreI = computed(() => {
  let result = 0;
  scored_EI_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'B')) {
      result++;
    }
  })
  return result;
})

// ======= S 类得分情况 =======
const scoreS = computed(() => {
  let result = 0;
  scored_SN1_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'A')) {
      result++;
    }
  })
  scored_SN2_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'A')) {
      result++;
    }
  })
  return result;
})

// ======= N 类得分情况 =======
const scoreN = computed(() => {
  let result = 0;
  scored_SN1_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'B')) {
      result++;
    }
  })
  scored_SN2_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'B')) {
      result++;
    }
  })
  return result;
})

// ======= T 类得分情况 =======
const scoreT = computed(() => {
  let result = 0;
  scored_TF1_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'A')) {
      result++;
    }
  })
  scored_TF2_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'A')) {
      result++;
    }
  })
  return result;
})

// ======= N 类得分情况 =======
const scoreF = computed(() => {
  let result = 0;
  scored_TF1_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'B')) {
      result++;
    }
  })
  scored_TF2_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'B')) {
      result++;
    }
  })
  return result;
})

// ======= J 类得分情况 =======
const scoreJ = computed(() => {
  let result = 0;
  scored_JP1_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'A')) {
      result++;
    }
  })
  scored_JP2_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'A')) {
      result++;
    }
  })
  return result;
})

// ======= P 类得分情况 =======
const scoreP = computed(() => {
  let result = 0;
  scored_JP1_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'B')) {
      result++;
    }
  })
  scored_JP2_Qeuss.forEach((item) => {
    let target = answers.find((an) => {
      return an.index === item;
    })

    if (!!target && (target.a === 'B')) {
      result++;
    }
  })
  return result;
})

// 最终结果字符串
const result = computed(() => {
  let _result = '';

  scoreE.value >= scoreI.value ? _result += 'E' : _result += 'I';
  scoreS.value >= scoreN.value ? _result += 'S' : _result += 'N';
  scoreT.value >= scoreF.value ? _result += 'T' : _result += 'F';
  scoreJ.value >= scoreP.value ? _result += 'J' : _result += 'P';

  return _result;
})

// ------------------------------------------------------------------------
const next = () => {
  // 记录答案
  answers.push({ index: unref(qIndex) + 1, a: unref(answer) });
  // 清除当前答案
  answer.value = '';
  // ---------------
  // 交卷并查看答案
  if (unref(_isLastQuestion)) {
    viewAnswer();
  }
  // 下一题
  else {
    qIndex.value++;
  }
}

// 揭晓答案
const viewAnswer = () => {
  showAnswer.value = true;
  setTimeout(() => {
    showE_I.value = true;
  }, 560);
  setTimeout(() => {
    showS_N.value = true;
  }, 1500);
  setTimeout(() => {
    showT_F.value = true;
  }, 2500);
  setTimeout(() => {
    showJ_P.value = true;
  }, 3500);
  setTimeout(() => {
    showDetails.value = false;
  }, 4000);
  setTimeout(() => {
    showResult.value = true;
  }, 4500);
  setTimeout(() => {
    showBackBtn.value = true;
  }, 5500);
}

// setTimeout(() => {
//   for (let i = 0; i < 90; i++) {
//     answers.push({ index: i + 1, a: Math.random() > 0.5 ? 'A' : 'B' })
//   }
//   qIndex.value = 90
// }, 300)

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
  margin-top: 50px;
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

/* ------------------------------------------------------ */
.details {
  transition: .5s;
  height: 250px;
  overflow: hidden;
}

.details.hide {
  height: 0;
}

.content {
  margin-bottom: 1em;
}

p.upper-letter {
  font-family: 'HanYi';
  font-size: 24px;
}

.calculated-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  position: relative;
  overflow: hidden;
}

.calculated-bar.should-wrap {
  flex-wrap: wrap;
}

.calculated-bar .msk {
  background-color: white;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  transition: 1s;
}

.twice-group-can {
  width: 100px;
}

.result-text {
  font-size: 20px;
  font-weight: bold;
  margin: 1em 0;
}

.result-text span {
  font-family: 'HanYi';
}

table.result-tb {
  width: 80vw;
  border-top: solid 1px #666;
  border-spacing: 0px;
}

table.result-tb td {
  text-align: center;
  font-size: 16px;
  height: 2.5em;
  border-bottom: solid 1px #666;
  letter-spacing: 1px;
  transition: .5s;
}

table.result-tb td:first-child {
  font-weight: bold;
}

table.result-tb td.is-result {
  font-weight: bold;
  color: red;
}

.backbtn {
  transition: .5s;
  margin-top: 30px;
}

.backbtn.hide {
  opacity: 0;
}

.page-content.result-pan {
  min-height: calc(100vh - 40px);
}
</style>