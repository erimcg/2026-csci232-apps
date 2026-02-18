<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const messageId = ref('')

function loadMessage() {
  router.push(`/user/${route.params.uid}/message/${messageId.value}`)
}

const messages = [
  { mid: 1, message: "Hello" },
  { mid: 2, message: "What's up" },
  { mid: 3, message: "Not much" }
]

const messageText = ref('')

watchEffect(() => {
  messageText.value = messages.find(message => message.mid == route.params?.mid)?.message
})

</script>

<template>
  <div class="view">
    <div class="profile">
      <h1>{{ $route.params.uid }}</h1>
    </div>

    <div class="messages">
      <nav>
        <label for="messageIdInput">Enter message id</label> <br>
        <input id="messageIdInput" v-model="messageId"><br>
        <button @click="loadMessage">Load Message</button>
      </nav>

      <div class="selectedMessage">
        <h3>Selected Message</h3>
        <span>Param: {{ $route.params.mid }}</span><br>
        <span>Query: {{ $route.query }}</span><br>
        <span>Hash: {{ $route.hash }}</span><br><br>

        <div class="messageText">
          Message: {{ messageText }}
        </div>
      </div><br>

      <button @click="$router.go(-1)">Go Back</button><br><br>

      <span>External link: </span><a href="https://slashdot.org">Slashdot</a>
    </div>
  </div>
</template>

<style scoped>
.view {
  height: 100%;
  width: 100%;
  background-color: rgb(239, 237, 237);

  display: flex;
  justify-content: center;
  gap: 20px;
}

.profile {
  padding: 20px;

  align-content: start;
  flex: 1 0;
}

.messages {
  padding: 20px;
  background-color: rgb(245, 242, 242);

  flex: 1 0;
}

.selectedMessage {
  margin-top: 20px;
  background-color: gainsboro;
  padding: 20px;
}

.selectedMessage>span {
  display: inline-block;
  padding: 5px;
  color: green;
}

.messageText {
  padding: 5px;
}
</style>
