<script setup>
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="app-view">
    <NavBar class="navbar"></NavBar>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.app-view {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}
</style>