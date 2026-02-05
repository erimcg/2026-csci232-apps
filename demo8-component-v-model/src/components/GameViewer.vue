<script setup>

const game = defineModel()

</script>

<template>
    <div id="viewer">
        <h3>Game Viewer</h3>

        <div>
            <span>Name: {{ game.name }}</span>
        </div>
    </div>
</template>


<style scoped>

#viewer {
    background-color: gainsboro;
    padding: 10px;
}

</style>