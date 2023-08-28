<script setup lang="ts">
import { RouterView, START_LOCATION } from 'vue-router';
import Loading from './components/loading.vue';
import { preloadStaticResource } from './lib/js/utils';
import { ref } from 'vue';
import { STATIC_IMAGES } from './lib/js/constants';

let isLoading = ref(true)
Promise.resolve(preloadStaticResource(STATIC_IMAGES)).then(() => {
  isLoading.value = false
})
START_LOCATION
</script>

<template>
  <template v-if="isLoading">
    <Loading text="正在加载中...."/>
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<style lang="scss" src="./lib/styles/reset.scss"/>
<style></style>
