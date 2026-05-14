<script setup>
import { ref, computed, watchEffect } from 'vue'

const isOn = ref(false)

const buttonLabel = computed(() => {
    return (isOn.value) ? "Turn Off" : "Turn On"
})

let intervalId = null
const count = ref(0)

watchEffect(() => {
    if (isOn.value) {
        intervalId = setInterval(() => count.value++, 1000);
    }
    else {
        clearInterval(intervalId)
        intervalId = null
    }
})
</script>

<template>
    <div class="component">
        <span class="description">Transition on State Changes</span>

        <button @click="isOn = !isOn">{{ buttonLabel }}</button>

        <Transition mode="out-in">
            <div :key="count" class="text-box">
            <!-- <div class="text-box"> -->
                <span>{{ count }}</span>
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
    transition: all 0.5s linear;
    animation: bounce-in 0.5s;     
}
.v-leave-active {
    transition: all 0.5s linear;
    /* animation: bounce-in 0.5s reverse; */
}

.v-enter-from span,
.v-leave-to span {
    opacity: 0;
}

.v-enter-active span {
    transition: opacity 0.5s ease-in;
}
.v-leave-active span {
    transition: opacity 0.5s ease-out;
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