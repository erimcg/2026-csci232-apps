<script setup>
import { ref, reactive } from 'vue'
import IconPanel from './components/IconPanel.vue'
import Timer from './components/Timer.vue'
import Carousel from './components/Carousel.vue'

let fontSize = ref(82)

/* IconPanel */
const iconPanelData = ref({
//const iconPanelData = reactive({
  icon: 'potted_plant',
  style: {
    //'font-size': fontSize
    'font-size': 82
  },
  colors: ['white', 'rgb(100,255,100)']
})

function decreaseFontSize() {
  iconPanelData.value.style['font-size']-=5
  //iconPanelData.style['font-size']-=5
  //fontSize.value-=5
}

/* Timer */
const timerState = ref('off')
const button1Label = ref("play_arrow")

function toggleTimer() {
  timerState.value = timerState.value == 'off' || timerState.value == 'reset' ? 'on' : 'off'
  button1Label.value = timerState.value == 'off' || timerState.value == 'reset' ? 'play_arrow' : 'stop'
}

function resetTimer() {
  timerState.value = "reset"
  button1Label.value = 'play_arrow'
}

/* Carousel */
const imageCount = ref(0)
const currentImageIndex = ref(0)

function setImageCount(newVal) {
  imageCount.value = newVal
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % imageCount.value
}

</script>

<template>
  <main>
    <div class="box box1">

      <button @click="toggleTimer" :class="{ 'timer-on': timerState == 'on' }">
        <span class="material-symbols-outlined">{{ button1Label }}</span>
      </button>

      <button @click="nextImage">
        <span class="material-symbols-outlined">change_circle</span>
      </button>

      <button @click="resetTimer">
        <span class="material-symbols-outlined">fast_rewind</span>
      </button>

    </div>

    <div class="box box2">

    </div>

    <div class="box box3">
      <Carousel @image-count="setImageCount" :index="currentImageIndex" />
    </div>

    <div class="box box4"></div>

    <div class="box box5" @click="decreaseFontSize">
      <IconPanel :data="iconPanelData" />
    </div>

    <div class="box box6">
      <Timer :state="timerState" size="64px" />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 90vh;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;

  border: 2px outset gainsboro;
  padding: 5px 15px;
  border-radius: 3px;
  color: rgb(96, 94, 94);
}

button>span {
  font-size: 128px;
}

button.timer-on {
  background-color: rgb(0 255 255 / 1);
  border: 1px inset rgb(169, 167, 167);
}

button:active {
  border: 1px inset rgb(169, 167, 167);
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  overflow: hidden;

  border: 1px solid gainsboro;
}

.box1 {
  grid-area: 1 / 1 / 6 / 2;

  display: flex;
  flex-direction: column;
}

.box2 {
  grid-area: 4 / 2 / 5 / 3;
}

.box3 {
  grid-area: 3 / 3 / 4 / 4;
}

.box4 {
  grid-area: 2 / 4 / 3 / 5;
}

.box5 {
  grid-area: 1 / 5 / 2 / 6;
}

.box6 {
  grid-area: 4 / 4 / 6 / 6;
}
</style>
