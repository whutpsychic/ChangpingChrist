<template>
  <van-nav-bar class="top-nav-bar" :style="`padding-top:${safeHeights.top}px;`" title="选择相册" left-arrow
    @click-left="() => router.back()" />
  <p style="line-height: 300px;height: 300px;text-align: center;">敬请期待</p>
  <!-- <van-grid :column-num="2" :gutter="10" :border="false" square>
    <van-grid-item to="/all-tests">
      <AlbumItem />
    </van-grid-item>
  </van-grid> -->
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSafeHeightStore } from '@/stores/safeHeight';
import albums from '@/db/album.json';
import AlbumItem from '@/components/AlbumItem.vue';

const router = useRouter();
const safeHeights = useSafeHeightStore();

const list: Ref<Array<Album>> = ref([]);


</script>

<style scoped></style>
