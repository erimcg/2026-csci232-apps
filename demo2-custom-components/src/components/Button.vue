<script setup>
    let props = defineProps(['label'])

    let emits = defineEmits(['switch-category'])
</script>

<template>
    <button @click="$emit('switch-category', label)">
        <h3>{{ label }}</h3>
    </button>
</template>

<style scoped>
    button {
        all: unset;
        display: block;

        background-color: rgb(206, 201, 182);
        width: 100px;
        padding: 10px 40px;
        border-radius: 5px;

        text-align: center;
    }

    h3 { margin: 0; }
</style>