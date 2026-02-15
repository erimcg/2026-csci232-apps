<script setup>
import { ref, computed, watch } from 'vue'
const { state, size } = defineProps(['state', 'size'])  // on | off | reset

let min = ref(0)
let sec = ref(0)
let milli = ref(0)

let time = computed(() => {
  return `${min.value.toString().padStart(2, '0')}:${sec.value.toString().padStart(2, '0')}:${milli.value.toString().padStart(2, '0')}`
})

let intervalId = null;

watch(() => state, (newValue, oldValue) => {
  if (newValue == 'on') {
    startTimer()
  }
  else if (newValue == 'off') {
    stopTimer()
  }
  else if (newValue == 'reset') {
    resetTimer()
  }
})

function startTimer() {
  intervalId = setInterval(() => {
    milli.value++
    if (milli.value == 100) {
      milli.value = 0
      sec.value++
    }
    if (sec.value == 60) {
      sec.value = 0
      min.value++
    }
    if (min.value == 60) {
      milli.value = 0
      sec.value = 0
      min.value = 0
    }
  }, 10)
}

function stopTimer() {
  clearInterval(intervalId)
}

function resetTimer() {
  clearInterval(intervalId)

  milli.value = 0
  sec.value = 0
  min.value = 0
}

</script>

<template>
  <section>
    <span :style="{ 'font-size': size }">{{ time }}</span>
  </section>
</template>

<style>
span {
  font-size: 32px;
}
</style>