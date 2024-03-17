<!-- 直播条目 -->
<template>
  <div class="live-video-card" @click="_gotoLiveView">
    <div class="left-icon">
      <img class="icon" alt="." src="@/assets/img/icon-changping.png" />
    </div>
    <div class="right-content">
      <p class="title"><span>{{ props.title }}</span><span v-if="props.living" class="living-tips">正在直播</span></p>
      <p class="subtitle">
        <span>{{ props.info }}</span>
      </p>
      <LivingIcon v-if="props.living" />
    </div>
  </div>
</template>

<script setup lang="ts">
import fc from '@/flutter-core/index.js';
import LivingIcon from './LivingIcon.vue';

const props = defineProps({
  title: { type: String, default: ' — ' },
  date: { type: String, default: ' — ' },
  url: { type: String, default: ' — ' },
  info: { type: String, default: ' — ' },
  living: { type: Boolean, default: false }
});

const _gotoLiveView = () => {
  fc.launchInnerExplorer(props.url);
}

</script>
<style scoped>
.live-video-card {
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.3);
}

.left-icon {
  --icon-size: 80px;
  width: var(--icon-size);
  height: var(--icon-size);
  margin-right: 1em;
}

.icon {
  --icon-size: 80px;
  width: var(--icon-size);
  height: var(--icon-size);
}

.right-content {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  flex-basis: calc(100% - 40px - 1em);
  position: relative;
}

.right-content .title {
  flex-basis: 100%;
  font-size: 18px;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
}

.right-content .title>span.living-tips {
  font-size: 14px;
  color: #32CD32;
}

.right-content .subtitle {
  color: #999;
}
</style>
