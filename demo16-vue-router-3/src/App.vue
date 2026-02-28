<script setup>
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="app">
    <NavBar></NavBar>

    <div class="views">
      <RouterView class="sidebar" name="sidebar"></RouterView>
      <RouterView class="main" name="main"></RouterView>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
}

.views {
  flex: 1;

  display: flex;
  width: 100%;
}

.sidebar {
  flex: 1;
  background: linear-gradient(to right,
      rgb(215, 215, 215) 0%,
      rgb(215, 215, 215) calc(100% - 7px),
      rgb(230, 230, 230) 100%);
}

.main {
  flex: 3;
  background: linear-gradient(to right,
      rgb(230, 230, 230) 0%,
      rgb(243, 243, 243) 7px,
      rgb(243, 243, 243) 100%);
}
</style>
