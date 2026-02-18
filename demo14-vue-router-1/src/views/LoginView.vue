<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

/*** Dynamic Route ***/

const username = ref('')
console.log(route)

function loadUser() {
  router.push(`/user/${username.value}`)
}

</script>

<template>
  <div class="view">
    <h1>Login</h1>

    <nav>
      <label for="userIdInput">Username</label> <br>
      <input id="userIdInput" v-model="username"> &nbsp;
      <button @click="loadUser">Go</button>
    </nav>

  </div>
</template>

<style scoped>
.view {
  height: 100%;
  width: 100%;
  background-color: rgb(239, 237, 237);

  display: flex;
  flex-direction: column;
}

.view > * {
  padding: 20px;
}

</style>
