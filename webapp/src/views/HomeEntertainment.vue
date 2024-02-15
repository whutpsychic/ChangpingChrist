<template>
  <div class="page-content entertainment-can">
    <van-grid :column-num="4" :gutter="10" :border="false" square>
      <van-grid-item class="item-block" icon="records-o" text="趣味测试" to="/all-tests" />
      <van-grid-item class="item-block" icon="photo-o" text="相册" to="/photo-album" />
    </van-grid>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.item-block {
  color: #1e90ff;
}
</style>