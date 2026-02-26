<script setup>
    import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="app">
        <NavBar></NavBar>

        <RouterView></RouterView>
    </div>
</template>

<style scoped>
.app {
    box-sizing: border-box;
    padding: 20px;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
}
</style>


