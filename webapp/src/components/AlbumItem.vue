<!-- 公告板 -->
<template>
  <div class="album-item">

  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: { type: Array<Object>, default: () => ([]) }
});

</script>

<style scoped>
.album-item {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.2);
}
</style>
