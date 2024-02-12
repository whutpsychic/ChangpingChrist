<template>
  <van-nav-bar safe-area-inset-top title="恩赐调查表" left-arrow @click-left="backup" />
  <!-- 初始遮罩层 -->
  <van-popup v-model:show="showPreInfo" position="bottom" :style="{ height: 'calc(100%)' }">
    <p class="title">恩赐调查表</p>
    <div class="page-content">
      <p class="prehead">注意事项：</p>
      <!-- <div style="height:10px;"></div> -->
      <p class="description">试问自己对下列陈述有何感觉？每一项的陈述，有多少是符合你本身的情况？请简单地用下列数字来回答以下的问题：</p>
      <p class="description noindent">
        <span>5-总是</span><span>4-经常</span><span>3-有时</span><span>2-很少</span><span>1-从不</span>
      </p>
      <p class="description">不要犹豫选择“4”或者“1”，渴望使自己谦虚或不夸大会影响你的选择，同时也会影响你测验的结果，请尽可能诚实地回答。</p>
      <div class="operator">
        <van-button type="primary" @click="showPreInfo = false">开始测试</van-button>
      </div>
    </div>
  </van-popup>
  <!-- 做题过程 -->
  <div class="main-body">
    <div class="ques-body-can">
      <p class="question-body">{{ `${qIndex + 1}. ${questions[qIndex].question}` }}</p>
      <!-- 仅两个选项 -->
      <div :class="`selector-can${answer === 5 ? ' active' : ''}`" @click="answer = 5">
        <span>{{ `5 - 总是` }}</span>
      </div>
      <div :class="`selector-can${answer === 4 ? ' active' : ''}`" @click="answer = 4">
        <span>{{ `4 - 经常` }}</span>
      </div>
      <div :class="`selector-can${answer === 3 ? ' active' : ''}`" @click="answer = 3">
        <span>{{ `3 - 有时` }}</span>
      </div>
      <div :class="`selector-can${answer === 2 ? ' active' : ''}`" @click="answer = 2">
        <span>{{ `2 - 很少` }}</span>
      </div>
      <div :class="`selector-can${answer === 1 ? ' active' : ''}`" @click="answer = 1">
        <span>{{ `1 - 从不` }}</span>
      </div>
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
    <div class="result-container">
      <p class="title">您的恩赐调查结果</p>
      <div ref="chart" class="chart-container"></div>
      <van-button type="primary" :class="showBackBtn ? 'backbtn' : 'backbtn hide'" block
        @click="router.back();">返回</van-button>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref, unref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { showConfirmDialog } from 'vant';
import * as echarts from 'echarts';
import questions from '@/db/questions/grace.json';

const router = useRouter();
// 显示初始遮罩层
const showPreInfo = ref(true);
// 当前题号
const qIndex = ref(0);
// 答案记录器组
const answers: Array<Answerobj> = [];
// 当前题答案
const answer = ref(0);
// 显示题答案计算结果
const showAnswer = ref(false);

const showBackBtn = ref(false);

const chart = ref(null);

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

// ======= 分类计算的题号 =======
const scored_A_Qeuss = [1, 17, 33, 49, 65, 81, 97, 113];
const scored_B_Qeuss = [2, 18, 34, 50, 66, 82, 98, 114];
const scored_C_Qeuss = [3, 19, 35, 51, 67, 83, 99, 115];
const scored_D_Qeuss = [4, 20, 36, 52, 68, 84, 100, 116];
const scored_E_Qeuss = [5, 21, 37, 53, 69, 85, 101, 117];
const scored_F_Qeuss = [6, 22, 38, 54, 70, 86, 102, 118];
const scored_G_Qeuss = [7, 23, 39, 55, 71, 87, 103, 119];
const scored_H_Qeuss = [8, 24, 40, 56, 72, 88, 104, 120];
const scored_I_Qeuss = [9, 25, 41, 57, 73, 89, 105, 121];
const scored_J_Qeuss = [10, 26, 42, 58, 74, 90, 106, 122];
const scored_K_Qeuss = [11, 27, 43, 59, 75, 91, 107, 123];
const scored_L_Qeuss = [12, 28, 44, 60, 76, 92, 108, 124];
const scored_M_Qeuss = [13, 29, 45, 61, 77, 93, 109, 125];
const scored_N_Qeuss = [14, 30, 46, 62, 78, 94, 110, 126];
const scored_O_Qeuss = [15, 31, 47, 63, 79, 95, 111, 127];
const scored_P_Qeuss = [16, 32, 48, 64, 80, 96, 112, 128];

// ======= 总得分情况 =======
const result = computed(() => {
  // ------------- scoreA -------------
  let scoreA = 0;
  scored_A_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreA += target.a;
    }
  })
  // ------------- scoreB -------------
  let scoreB = 0;
  scored_B_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreB += target.a;
    }
  })
  // ------------- scoreC -------------
  let scoreC = 0;
  scored_C_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreC += target.a;
    }
  })
  // ------------- scoreD -------------
  let scoreD = 0;
  scored_D_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreD += target.a;
    }
  })
  // ------------- scoreE -------------
  let scoreE = 0;
  scored_E_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreE += target.a;
    }
  })
  // ------------- scoreF -------------
  let scoreF = 0;
  scored_F_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreF += target.a;
    }
  })
  // ------------- scoreG -------------
  let scoreG = 0;
  scored_G_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreG += target.a;
    }
  })
  // ------------- scoreH -------------
  let scoreH = 0;
  scored_H_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreH += target.a;
    }
  })
  // ------------- scoreI -------------
  let scoreI = 0;
  scored_I_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreI += target.a;
    }
  })
  // ------------- scoreJ -------------
  let scoreJ = 0;
  scored_J_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreJ += target.a;
    }
  })
  // ------------- scoreK -------------
  let scoreK = 0;
  scored_K_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreK += target.a;
    }
  })
  // ------------- scoreL -------------
  let scoreL = 0;
  scored_L_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreL += target.a;
    }
  })
  // ------------- scoreM -------------
  let scoreM = 0;
  scored_M_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreM += target.a;
    }
  })
  // ------------- scoreN -------------
  let scoreN = 0;
  scored_N_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreN += target.a;
    }
  })
  // ------------- scoreO -------------
  let scoreO = 0;
  scored_O_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreO += target.a;
    }
  })
  // ------------- scoreP -------------
  let scoreP = 0;
  scored_P_Qeuss.forEach((item) => {
    let target = answers.find((_item) => {
      return _item.index === item;
    })
    if (!!target && typeof (target.a) === 'number') {
      scoreP += target.a;
    }
  })

  let _result: Array<number> = [scoreA, scoreB, scoreC, scoreD, scoreE, scoreF, scoreG, scoreH, scoreI, scoreJ, scoreK, scoreL, scoreM, scoreN, scoreO, scoreP];

  return _result;
})

// ------------------------------------------------------------------------
const next = () => {
  // 记录答案
  answers.push({ index: unref(qIndex) + 1, a: unref(answer) });
  // 清除当前答案
  answer.value = 0;
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

  // 找到前三名分数
  let target = [...unref(result)]
  target.sort((a, b) => { return b - a; });

  // 展示图表
  setTimeout(() => {
    const myChart = echarts.init(chart.value);

    // 指定图表的配置项和数据
    const categories = ['行政治理', '使徒', '分辨', '传福音', '关怀', '信心', '施予', '接待', '知识', '领导', '怜悯', '先知', '牧师', '服事', '教导', '智慧'];
    const option = {
      grid: {
        top: '5%',
        left: '25%',
        right: '15%'
      },
      xAxis: {
        min: 0,
        max: 40,
        axisLabel: { color: "#000", fontWeight: 'bold', fontSize: 18 },
      },
      yAxis: {
        axisLabel: { color: "#000", fontWeight: 'bold', fontSize: 17 },
        data: categories
      },
      series: [
        {
          name: '分数',
          type: 'bar',
          data: unref(result).map((item, i) => {
            const _isf3d = (item === target[0] || item === target[1] || item === target[2])
            return {
              name: categories[i], value: item,
              itemStyle: { color: _isf3d ? 'red' : '#389edc' },
              label: { show: true, position: 'right', fontSize: 18, color: _isf3d ? 'red' : '#233' }
            }
          })
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, 300);

  setTimeout(() => {
    showBackBtn.value = true;
  }, 2000);
}

// ------- test -------
// setTimeout(() => {
//   for (let i = 0; i < 126; i++) {
//     let _a = parseInt(`${Math.random() * 10}`);
//     answers.push({ index: i + 1, a: _a > 5 ? _a - 5 : _a })
//   }
//   qIndex.value = 127;
// }, 300)

</script>

<style scoped>
.page-content {
  background-color: white;
  padding: 20px;
}

.result-container {
  width: 100vw;
  min-height: calc(100vh - 50px);
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

p.description.noindent {
  text-indent: 0;
  text-align: center;
}

p.description span {
  margin: 0 0.5em;
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
  margin: 1.5em 0em;
  padding: 1em 1em;
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

.backbtn {
  transition: .5s;
  margin-top: 30px;
  margin: 0 2em;
  width: calc(100vw - 4em);
}

.backbtn.hide {
  opacity: 0;
}

.chart-container {
  min-height: 600px;
  height: calc(100vh - 180px);
}

.ques-body-can {
  min-height: 540px;
}
</style>