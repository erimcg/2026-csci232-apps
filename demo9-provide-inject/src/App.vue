<script setup>
  import Square from './components/Square.vue';
  import { ref, provide } from 'vue'

  const shape = ref('circle')
  const count = ref(67)

  provide('shape', shape)
  provide('count', { count, toggleShape })

  function toggleShape() {
    shape.value = shape.value === 'circle' ? 'triangle' : 'circle'
  }

</script>

<template>
  <Square />
  <button @click="toggleShape">&Delta; Shape</button>
</template>

<style scoped>

</style>
