<script setup>

const props = defineProps(['text'])
</script>

<template>
    <div class="red-box">
        <span>{{ props.text }}</span>
    </div>
</template>

<style scoped>
.red-box {
    flex: 1;

    width: 100%;
    height: 100%;

    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 5rem;
}
</style>