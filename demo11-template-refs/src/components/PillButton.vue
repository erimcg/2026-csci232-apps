<script setup>
import { ref } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true
    }
})

const count = ref(0)

defineExpose({
    count
})

function incrementCount() {
    count.value++
}

</script>

<template>
    <div @click="incrementCount">{{ label }}</div>
</template>

<style scoped>
div {
    background-color: #007bff;
    color: white;
    padding: 8px 32px;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
}

button:hover {
    background-color: #51a5ff;
}

button:active {
    transform: scale(0.95);
}
</style>