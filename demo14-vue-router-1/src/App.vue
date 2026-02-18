<script setup></script>

<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> &nbsp;
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;

  background-color: gray;
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  flex-direction: column;
}

nav {
  background-color: gainsboro;
  padding: 20px;
}

main {
  background-color: gainsboro;
  padding: 20px;

  flex-grow: 1;
}
</style>
