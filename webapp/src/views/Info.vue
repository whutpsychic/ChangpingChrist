<template>
  <div class="page-content">
    <!-- 介绍文字 -->
    <p class="introduction">{{ introduceText }}</p>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item>
        <img alt="" class="swipe-img" src="@/assets/swipe/1.jpg" />
        <div class="inline-text-can _1st">
          <p class="context title">诗篇 1：2</p>
          <p class="context">惟喜爱耶和华的律法，</p>
          <p class="context">昼思夜想，这人便为有福。</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <img alt="" class="swipe-img" src="@/assets/swipe/2.jpg" />
        <div class="inline-text-can _2nd">
          <p class="context">他们经过流泪谷，</p>
          <p class="context">叫这谷变为泉源之地。</p>
          <p class="context title">诗篇 84：6</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <img alt="" class="swipe-img" src="@/assets/swipe/3.jpg" />
        <div class="inline-text-can _3rd">
          <p class="context">在我里面有平安。</p>
          <p class="context title">约翰福音 16：33</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <img alt="" class="swipe-img" src="@/assets/swipe/4.jpg" />
        <div class="inline-text-can _4th">
          <p class="context title">撒母耳记上 2：7</p>
          <p class="context">祂使人贫穷，也使人富足</p>
          <p class="context">使人卑微，也使人高贵</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div style="height:15px;"></div>
    <!-- 通知消息 -->
    <NoticeCard :data="noticeData" />
    <!-- 占位高度 -->
    <div style="height:40px;"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NoticeCard from '../components/NoticeCard.vue';
import description from '@/db/description.json';
import noticeData from '@/db/notifications.json';

const introduceText = ref(description);


</script>

<style scoped>
.introduction {
  margin-bottom: 0.5em;
  padding: 10px;
  color: #666;
}

.my-swipe {
  border-radius: 10px;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.8);
}

.swipe-img {
  width: 100%;
}

.my-swipe .van-swipe-item {
  position: relative;
  color: #fff;
  height: 180px;
}

.inline-text-can {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: purple; */
  z-index: 9;
}

.inline-text-can._1st {
  top: 1.5em;
  color: white;
}

.inline-text-can._2nd {
  top: 1.5em;
  text-align: right;
  color: red;
}

.inline-text-can._3rd {
  top: 2.5em;
  text-align: center;
  color: white;
  letter-spacing: 3px;
}

.inline-text-can._4th {
  top: 2em;
  text-align: right;
  color: white;
}

p.context {
  font-family: 'HanYi';
  font-size: 16pt;
  margin: 0 1em;
}

p.title {
  font-size: 14pt;
  margin: 0.5em 1em;
}
</style>