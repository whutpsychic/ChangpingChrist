<!-- 娱乐 - 测试条目 -->
<template>
  <div class="test-card" @click="_gotoPreTest">
    <div class="left-icon">
      <slot name="icon"></slot>
    </div>
    <div class="right-content">
      <p class="title">{{ props.title }}</p>
      <p class="subtitle">{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
});

const router = useRouter();

const _gotoPreTest = () => {
  router.push({ path: `/${props.name}` })
}

</script>
<style scoped>
.test-card {
  margin-bottom: 1.5em;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.5);
}

.left-icon {
  --icon-size: 80px;
  width: var(--icon-size);
  height: var(--icon-size);
  margin-right: 1em;
  display: flex;
  align-items: center;
}

.right-content {}

.right-content .title {
  /* flex-basis: 100%; */
  font-size: 16px;
  margin-bottom: 0.5em;
  font-weight: bold;
}

.right-content .subtitle {
  color: #888;
  line-height: 1.5em;
}
</style>
