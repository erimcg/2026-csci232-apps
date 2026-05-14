<script setup>
import { ref, computed } from 'vue'

const index = ref(1)

</script>

<template>
    <div class="component">
        <span class="description">Fade-in using v-conditionals</span>

        <button @click="index = (index + 1) % 3"> Swap text</button>

        <Transition mode="out-in">
        <!-- <Transition> -->
            <div v-if="index == 1" class="text-box">
                <span>Hello Joe!</span>
            </div>
            <div v-else-if="index == 2" class="text-box">
                <span>Hello Sal!</span>
            </div>
            <div v-else="index == 3" class="text-box">
                <span>Wanna get pizza?</span>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.component {
    position: relative;

    flex: 1;

    padding: 30px 20px;
    background-color: gainsboro;
    border-radius: 5px;

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
    height: 30px;
}

span {
    font-size: 2rem;
}

.v-enter-active {
    transition: all 1s linear;
    animation: bounce-in 1s 0.5s;
}

.v-leave-active {
    transition: all 1s linear 1s;
    animation: bounce-in 1s reverse;
}

.v-enter-from,
.v-leave-to {
    height: 0;
    padding: 0;
}

.v-enter-to,
.v-leave-from {
    height: 30px;
    padding: 10px;
}

.v-enter-from span,
.v-leave-to span {
    opacity: 0;
}

.v-enter-active span {
    transition-delay: 5s;
    transition: opacity 1s ease-in 0.5s;
}

.v-leave-active span {
    transition: opacity 1s ease-out;
}

.v-enter-to span,
.v-leave-from span {
    opacity: 1;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>