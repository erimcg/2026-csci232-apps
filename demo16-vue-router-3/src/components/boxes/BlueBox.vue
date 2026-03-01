<script setup>

const props = defineProps(['text'])

</script>

<template>
    <div class="blue-box">
        <span>{{ props.text }}</span>
    </div>
</template>

<style scoped>
.blue-box {
    flex: 1;

    width: 100%;
    height: 100%;

    background-color: blue;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 5rem;
}
</style>