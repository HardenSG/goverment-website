<template>
  <div class="loading">{{ text }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: {
    type: String,
    default: () => ''
  }
}>()

const text = computed(() => props.text || '加载中....')
</script>

<style lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>