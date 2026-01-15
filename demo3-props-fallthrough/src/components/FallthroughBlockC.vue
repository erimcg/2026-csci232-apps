<script setup>
    import { useAttrs } from 'vue';
    const attr = useAttrs()  // not reactive

    console.log(attr)
</script>

<template>
    <div>Two root elements</div>
    <section :class="$attrs['class']">  <!-- sets class but with no style -->
         <div>{{ $attrs["data-adjective"] }} {{  $attrs["data-noun"] }}</div>
    </section>
</template>

<style>

</style>