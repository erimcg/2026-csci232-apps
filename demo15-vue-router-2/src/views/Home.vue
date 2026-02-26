<script setup>

</script>

<template>
    <div class="home-view">
        <h1>Home</h1>

        <RouterView></RouterView>
    </div>
</template>

<style scoped>

.home-view {
    flex: 1;

    box-sizing: border-box;
    padding: 20px;

    background-color: rgb(234, 234, 234);

    display: flex;
    flex-direction: column;
}

</style>