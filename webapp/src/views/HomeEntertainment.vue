<template>
  <div class="page-content entertainment-can">
    <p class="menu-title">趣味测试</p>
    <ul>
      <li>
        <TestCard name="MBTI" title="MBTI性格测试" subtitle="Myers-Briggs Type Indicator 只有你是你，天生个性，了解自己。">
          <template #icon>
            <img alt="." src="@/assets/img/icon-mbti.png" style="width:100%;" />
          </template>
        </TestCard>
      </li>
      <li>
        <TestCard name="grace" title="恩赐调查表" subtitle="你的信仰，你的灵命。">
          <template #icon>
            <img alt="." src="@/assets/img/icon-cross.webp" style="width:100%;" />
          </template>
        </TestCard>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import TestCard from '@/components/TestCard.vue';

</script>

<style scoped>
p.menu-title {
  font-size: 16px;
  font-weight: bold;
  text-indent: 1em;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}

p.menu-title::before {
  content: '';
  display: block;
  width: 0.5em;
  height: 1em;
  margin-right: 0.5em;
  background-color: orange;
}
</style>