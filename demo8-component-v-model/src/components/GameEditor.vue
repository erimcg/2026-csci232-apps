<script setup>

const game = defineModel()

</script>

<template>
    <div id="editor">
        <h3>Game Editor</h3>

        <label for="name">Name</label><br>
        <input id="name" v-model="game.name">
    </div>
</template>


<style scoped>

#editor {
    background-color: gainsboro;
    padding: 10px;
}

</style>