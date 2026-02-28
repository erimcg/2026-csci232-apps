<script setup>

</script>

<template>
    <div class="home-side-bar">
      <RouterView name="sidebar-top"></RouterView>
      <RouterView name="sidebar-center"></RouterView>
      <RouterView name="sidebar-bottom"></RouterView>
    </div>
</template>

<style scoped>
.home-side-bar {
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>