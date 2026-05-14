<script setup>
import { ref, computed } from 'vue'

const hideText = ref(true)

const buttonLabel = computed(() => {
    console.log(hideText.value)
    return (hideText.value) ? "Show text" : "Hide text"
})

</script>

<template>
    <div class="component">
        <span class="description">Fade-in with CSS</span>

        <button @click="hideText = !hideText">{{ buttonLabel }}</button>
        
        <div class="text-box" :class="{ 'hide-text': hideText }">
        <!-- <div v-show="!hideText" class="text-box" :class="{ 'hide-text': hideText }"> -->
            <span>Hello Joe!</span>
        </div>
    </div>
</template>

<style scoped>
.component {
    position: relative;

    padding: 30px 20px;
    background-color: gainsboro;
    border-radius: 5px;;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.description {
    position: absolute;
    left: 5px;
    top: 2px;

    font-size: 0.8rem;
    color: rgb(59, 59, 59);
}

button {
    padding: 5px 20px;
    font-size: 2rem;
}

.text-box {
    padding: 10px;
}

span {
    font-size: 2rem;
    transition: opacity 1s ease-in;
}

.hide-text span {
    opacity: 0;
}

</style>