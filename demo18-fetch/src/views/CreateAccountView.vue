<script setup>
import { ref, toRaw } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const user = ref({})

function createAccount() {
    const newUser = toRaw(user.value)
    userStore.createAccount(newUser)
    user.value = {}
}

</script>

<template>
    <div class="create-account-view">
        <h1>Create Account</h1>

        <div class="create-account-form">
            <div class="input">
                <label for="username">Username</label>
                <input id="username" v-model="user.username">
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input id="password" v-model="user.password" type="password">
            </div>
            <div class="input">
                <label for="firstName">First name</label>
                <input id="firstName" v-model="user.firstName">
            </div>
            <div class="input">
                <label for="lastName">Last name</label>
                <input id="lastName" v-model="user.lastName">
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input id="email" v-model="user.email">
            </div>

            <button @click="createAccount()">Let's Go!</button>
        </div>

    </div>
</template>

<style scoped>
.create-account-view {
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

.create-account-form {
    width: 250px;

    display: flex;
    flex-direction: column;
}

.input {
    display: flex;
    flex-direction: column;
}

.input~.input {
    margin-top: 10px;
}


.create-account-form>button {
    width: 100px;
    padding: 10px;
    font-size: 1rem;
    margin-top: 10px;

    align-self: center;
}
</style>