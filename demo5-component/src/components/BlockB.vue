<script setup>

const props = defineProps({
    info: Number
})

</script>

<template>
    <div>
        <span>{{ info }}</span>
    </div>
</template>

<style scoped>
div {
    background-color: rgb(252, 183, 183);

    width: 200px;
    height: 100px;

    flex: 1 0 50px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    border-radius: 5px;
}
</style>