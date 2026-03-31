<script setup>
import { useUserStore } from '@/stores/userStore.js';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => {
    console.log('get profile')
    user.value = await userStore.getProfile()
})
</script>

<template>
    <div class="home-view">
        <h1>Welcome {{ user.firstName }} {{ user.lastName }}!</h1>

        <div class="profileData" v-if="user">
                <span>
                    Username: {{ user.username }}
                </span>
                <span>
                    Email: {{ user.email }}
                </span>
        </div>
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

.profileData {
    padding: 20px 10px;
    background-color: rgb(204, 204, 204);
}

.profileData>span {
    display: block;
}
</style>