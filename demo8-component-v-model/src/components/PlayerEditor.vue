<script setup>

const username = defineModel('username')
const level = defineModel('level', { type: Number, default: 0 })

</script>

<template>
    <div id="editor">
        <h3>Player Editor</h3>

        <label for="username">Userame</label><br>
        <input id="username" v-model="username"><br>

        <label for="level">Level</label><br>
        <input id="level" type="number" min="0" v-model.number="level"> <br>
    </div>
</template>


<style scoped>

#editor {
    background-color: gainsboro;
    padding: 10px;
}

</style>