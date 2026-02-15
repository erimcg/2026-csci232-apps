<script setup>

const player = defineModel()

</script>

<template>
    <div id="viewer">
        <h3>Player Viewer</h3>

        <div>
            <span>Username: {{  player.username }}</span><br>
            <span>Level: {{  player.level }}</span>
        </div>
    </div>
</template>


<style scoped>

#viewer {
    background-color: gainsboro;
    padding: 10px;
}

</style>