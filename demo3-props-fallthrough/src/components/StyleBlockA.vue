<script setup>
    import { reactive, ref } from 'vue'

    const baseStyle = reactive({
        'font-weight': 'normal'
    })

    const mobileStyle = reactive({
        'color': '#000000'
    })

    function toggleBold() {
        baseStyle['font-weight'] = baseStyle['font-weight'] == 'bold' ? 'normal' : 'bold'
    }

    function toggleRed() {
        mobileStyle['color'] = mobileStyle['color'] == '#c61616' ? 'black' : '#c61616'
    }

</script>

<template>
    <section>
        <div :style="[baseStyle, mobileStyle]">Hello</div>
        <button @click="toggleBold">&Delta; Bold </button>
        <button @click="toggleRed">&Delta; Red </button>
    </section>
</template>

<style scoped>

</style>