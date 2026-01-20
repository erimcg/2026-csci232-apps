<script setup>
import { ref, onActivated, onDeactivated } from 'vue'

const arr = Array.from({ length: 100 }, (_, i) => i + 1);

const blockName = ref('BlockA')

function toggleComponent () {
  blockName.value = (blockName.value == 'BlockA' ? 'BlockB' : 'BlockA')
  console.log(blockName.value)
}

onActivated(() => {
  console.log("On activated")
})

onDeactivated(() => {
  console.log("On deactivated")
})

</script>

<template>
  <main>
    <h3>List</h3>
    <br>

    <div class="list">
      <KeepAlive>
        <component :is="blockName" :max="10" v-for="item in arr" :info="item" />
      </KeepAlive>
    </div>
    <br>

    <button @click="toggleComponent" class="button">Toggle Visibility</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: auto;
  height: calc(100vh - 100px);
}

.button {
  font-size: 16px;
  padding: 5px;
}
</style>
