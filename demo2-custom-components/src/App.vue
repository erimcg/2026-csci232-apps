<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Aside from './components/Aside.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue'

let category = ref('Food')

function switchCategory(newValue) {
    category.value = newValue
}
</script>

<template>
  <div class="view">
    <Header text="Component Basics" class="round-top"/>

    <div id="content">
      <Main class="main" :category="category"/>
      <Aside class="aside" @switch-category="switchCategory"/>
    </div>

    <Footer>
      <span>&copy; artfulmonkeys.xyz</span>
    </Footer>
  </div>
</template>

<style scoped>
.view {
  margin: 10px;
  height: 95%;

  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
  margin-top: 10px;

  display: flex;
  gap: 10px;
}

.main { flex: 0 0 65%;   /* grow:0, shrink:0, basis: 65% */ }

.aside { flex: 1;  /* grow - take up remaining space*/ }

</style>
