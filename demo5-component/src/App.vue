<script setup>
import { ref, KeepAlive } from 'vue'

const listType = ref('ListA')

function toggleComponent () {
  listType.value = (listType.value == 'ListA' ? 'ListB' : 'ListA')
  console.log(listType.value)
}

</script>

<template>
  <main>
    
    <KeepAlive>
        <component :is="listType"></component>
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
