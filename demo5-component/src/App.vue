<script setup>
import { ref, KeepAlive } from 'vue'
import List from './components/List.vue'

const type = ref('A')

function toggleComponent () {
  type.value = (type.value == 'A' ? 'B' : 'A')
  console.log(`New type: ${type.value}`)
}

</script>

<template>
  <main>
    
    <KeepAlive>
        <component :is="List" :key="type" :type="type"></component>
    </KeepAlive>

    <button @click="toggleComponent">
      <span class="material-symbols-outlined">change_circle</span>
    </button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;

  align-items: center;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 40px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  flex: 0 0;
}

button span {
  font-size: 32px;
  color: rgb(69, 68, 68);
}

button:hover span {
  color: rgb(130, 130, 130);
}
</style>
