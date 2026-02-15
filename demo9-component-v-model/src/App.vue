<script setup>
import GameEditor from './components/GameEditor.vue';
import GameViewer from './components/GameViewer.vue';
import PlayerEditor from './components/PlayerEditor.vue';
import PlayerViewer from './components/PlayerViewer.vue';
import { ref } from 'vue'

import Game from './models/Game';
import Player from './models/Player';

const game = ref(new Game())
const player = ref(new Player())

</script>

<template>
  <main>

    <section class="game">
      <GameEditor v-model="game" />
      <GameViewer v-model="game" />
    </section>

    <section class="player">
      <PlayerEditor 
        v-model:username="player.username"
        v-model:level="player.level" />

      <PlayerViewer v-model="player" />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

section {
  display: flex;
  justify-content: center;
  
  gap: 20px;
}

section > * {
  width: 100%;
}

</style>
