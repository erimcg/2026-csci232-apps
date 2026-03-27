<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const username = ref('')
const password = ref('')

</script>

<template>
    <div class="login-view">
        <h1>Sign in</h1>

        <div class="login-form">
            <div class="input">
                <label for="username">Username</label>
                <input id="username" v-model="username" type="text">
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input id="password" v-model="password" type="password"
                @keydown.enter="userStore.login(username, password)">
            </div>
            <button @click="userStore.login(username, password)">Let's Go!</button>
        </div>

    </div>
</template>

<style scoped>
.login-view {
    background-color: rgb(245, 245, 245);
    color: rgb(64, 64, 64);

    box-sizing: border-box;
    padding: 20px;

    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-form {
    width: 250px;

    display: flex;
    flex-direction: column;
}

.input {
    display: flex;
    flex-direction: column;
}

.input ~ .input {
    margin-top: 10px;
}


.login-form > button {
    width: 100px;
    padding: 10px;
    font-size: 1rem;
    margin-top: 10px;

    align-self: center;
}

</style>