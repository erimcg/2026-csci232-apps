<script setup>
    import { useAttrs } from 'vue';
    const attr = useAttrs()  // not reactive

    console.log(attr)
</script>

<template>
    <div>Two root elements</div>
    <section v-bind="$attrs">
    <!-- <section> -->
        <div>{{ $attrs["data-adjective"] }} {{  $attrs["data-noun"] }}</div>
    </section>
</template>

<style>
    section {
        margin-bottom: 20px;
    }
</style>