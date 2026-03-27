<script setup>
import { useUserStore } from '@/stores/userStore.js';
import { storeToRefs } from 'pinia';

let userStore = useUserStore()
let { user } = storeToRefs(userStore)

</script>

<template>
    <div class="home-view">
        <h1>Welcome {{ user.firstName }} {{ user.lastName }}!</h1>
    </div>
</template>

<style scoped>
.home-view {
    background-color: rgb(237, 237, 237);
    color: rgb(63, 63, 63);

    box-sizing: border-box;
    padding: 20px;

    flex: 1;
}
</style>