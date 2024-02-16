<!-- 直播条目 -->
<template>
  <div class="living-icon" :style="`width:${props.size}px;height:${props.size}px;`">
    <div class="live-bar _1st"></div>
    <div class="live-bar _2nd"></div>
    <div class="live-bar _3rd"></div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  size: { type: Number, default: 18 }
})

</script>
<style scoped>
.living-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.live-bar {
  width: 20%;
  height: 100%;
  background-color: #32CD32;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes living1 {
  0% {
    height: 40%;
  }

  50% {
    height: 100%;
  }

  100% {
    height: 40%;
  }
}

@keyframes living2 {
  0% {
    height: 100%;
  }

  50% {
    height: 40%;
  }

  100% {
    height: 100%;
  }
}

.live-bar._1st {
  animation-name: living1;
}

.live-bar._2nd {
  animation-name: living2;
}

.live-bar._3rd {
  animation-name: living1;
}
</style>
