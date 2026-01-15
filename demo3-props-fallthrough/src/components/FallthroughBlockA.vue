<script setup>
    import { useAttrs } from 'vue';
    const attr = useAttrs()  // not reactive

    console.log(attr)
    console.log(attr.class)
</script>

<template>
    <section>
        <div>{{ $attrs["data-adjective"] }} {{  $attrs["data-noun"] }}</div>
    </section>
</template>

<script></script>