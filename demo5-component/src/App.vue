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

    <button @click="toggleComponent" class="button">Toggle List</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;;
}

.button {
  font-size: 16px;
  padding: 5px;
}
</style>
