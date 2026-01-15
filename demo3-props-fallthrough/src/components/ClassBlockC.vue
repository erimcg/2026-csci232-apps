<script setup>
    import { reactive, computed } from 'vue'

    const textState = reactive({
        bold: false,
        'red-text': true,
    })

    function toggleBold() {
        textState.bold = !textState.bold
    }

    function toggleRed() {
        textState['red-text'] = !textState['red-text']
    }

    // both bold and red cannot be on at the same time
    const classObject = computed(() => { return {
        bold: (textState.bold && textState['red-text']) ? false : textState.bold,
        'red-text': (textState.bold && textState['red-text']) ? false : textState['red-text']
    }})

</script>

<template>
    <section>
        <div :class="classObject">Hello</div>
        <button @click="toggleBold">&Delta; Bold ({{ textState.bold }})</button>
        <button @click="toggleRed">&Delta; Red ({{ textState['red-text'] }})</button>
    </section>
</template>

<style scoped>

.bold {
    font-weight: bold;
}

.red-text {
    color: rgb(198, 22, 22);
}
</style>