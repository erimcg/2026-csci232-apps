<script setup>
    import Circle from './Circle.vue';
    import Triangle from './Triangle.vue';
    import { inject } from 'vue'

    const shape = inject('shape')
</script>

<template>
  <div class="square">
    <template v-if="shape === 'circle'">
        <Circle />
    </template>
    <template v-else>
        <Triangle />
    </template>
    
  </div>
</template>

<style scoped>
.square {
    width: 200px;
    height: 200px;

    background-color: gainsboro;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
