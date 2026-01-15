<script setup>
    const props = defineProps({
        info: Object
    })
</script>

<template>
    <article>
        <h3>{{ info.title }}</h3>
        <p>{{ info.text }}</p>
    </article>
</template>

<style scoped>
    article {
        background-color: rgb(172, 196, 198);
        padding: 10px;
        border-radius: 10px;
    }

    h3 { margin: 0; }
</style>