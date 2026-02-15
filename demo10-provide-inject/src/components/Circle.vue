<script setup>
    import { inject } from 'vue'

    const { count, toggleShape } = inject('count')
</script>

<template>
    <div class="circle" @click="toggleShape">
        <span>{{ count }}</span>
    </div>
</template>

<style scoped>
.circle {
    width: 180px;
    height: 180px;

    border-radius: 50%;
    background-color: rgb(232, 230, 230);

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
