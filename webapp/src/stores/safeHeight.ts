import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSafeHeightStore = defineStore('safeHeight', () => {
  const top = ref(0);
  const bottom = ref(0);

  async function setup(values: Array<number>) {
    top.value = values[0];
    bottom.value = values[1];
  }

  return { top, bottom, setup }
})
