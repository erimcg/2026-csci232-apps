<script setup>
import { useTemplateRef } from 'vue';

const props = defineProps(['orientation'])

const main = useTemplateRef('main')

function toggleOrientation() {
  main.value.classList.toggle('horizontal')
}
</script>

<template>
    <div class="home-main" :class="props.orientation" @click="toggleOrientation" ref="main">
      <RouterView class="main-left" name="main-left"></RouterView>
      <RouterView class="main-right" name="main-right"></RouterView>
    </div>
</template>

<style scoped>
.home-main {
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.horizontal {
  flex-direction: row;
}
</style>