<script setup>
import { ref } from 'vue'

const isBold = ref(true)
const isRed = ref(false)

function toggleBold() {
    isBold.value = !isBold.value
}

function toggleRed() {
    isRed.value = !isRed.value
}

</script>

<template>
    <div>
        <section>
            <div :class="{ bold: isBold, 'red-text': isRed }">Hello</div>
            <button @click="toggleBold">&Delta; Bold ({{ isBold }})</button>
            <button @click="toggleRed">&Delta; Red ({{ isRed }})</button>
        </section>

        <section>
            <div class="big" :class="{ bold: isBold, 'red-text': isRed }">Hello</div>
            <button @click="toggleBold">&Delta; Bold ({{ isBold }})</button>
            <button @click="toggleRed">&Delta; Red ({{ isRed }})</button>
        </section>

        <section>
            <div :class="[isBold ? 'bold' : '', isRed ? 'red-text' : '']">Hello</div>
            <button @click="toggleBold">&Delta; Bold ({{ isBold }})</button>
            <button @click="toggleRed">&Delta; Red ({{ isRed }})</button>
        </section>
    </div>
</template>

<style scoped>
.bold {
    font-weight: bold;
}

.red-text {
    color: rgb(198, 22, 22);
}

.big {
    font-size: 24px;
}

section {
    background-color: gainsboro;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>