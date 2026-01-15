<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        tag: {
            type: String,
            default: "h1"
        },
        text: String
    })
</script>

<template>
    <header>
       <component :is="props.tag">{{ props.text }}</component>
    </header>
</template>

<style scoped>
    header {
        background-color: rgb(243, 238, 238);
        padding-inline: 5px;
        padding-block: 10px;
    }

    h1,h2,h3,h4,h5,h6 { margin: 0; }

    .round-top { border-radius: 10px 10px 0 0; }
</style>