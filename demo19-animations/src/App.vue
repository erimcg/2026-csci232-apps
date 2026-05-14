<script setup>
import FadeInWithCSS from './components/FadeInWithCSS.vue';
import FadeInWithTransition from './components/FadeInWithTransition.vue';
import FadeInWithAnimation from './components/FadeInWithAnimation.vue';
import FadeInWithDelayedTransition from './components/FadeInWithDelayedTransition.vue';
import FadeInOnVConditionals from './components/FadeInOnVConditionals.vue';
import CounterTransition from './components/CounterTransition.vue';
</script>

<template>
  <div class="page">
    <div class="examples">
      <FadeInWithCSS class="grid-item pos-1" />
      <FadeInWithTransition class="grid-item pos-2" />
      <FadeInWithAnimation class="grid-item pos-3" />
      <FadeInWithDelayedTransition class="grid-item pos-4" />
      <FadeInOnVConditionals class="grid-item pos-5" />
      <CounterTransition class="grid-item pos-6" />
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
}

.examples {
  margin-top: 100px;
  padding: 20px;
  box-sizing: border-box;

  width: 70%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;

  background-color: rgb(253, 217, 217);
}

.grid-item {
  justify-self: stretch;
  align-self: start;
}

.pos-1 {
  grid-column: 1;
  grid-row: 1;
}

.pos-2 {
  grid-column: 2;
  grid-row: 1;
}

.pos-3 {
  grid-column: 1;
  grid-row: 2;
}

.pos-4 {
  grid-column: 2;
  grid-row: 2;
}

.pos-5 {
  grid-column: 1;
  grid-row: 3;
}

.pos-6 {
  grid-column: 2;
  grid-row: 3;
}
</style>
