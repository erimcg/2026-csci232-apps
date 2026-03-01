<script setup>
import { computed } from 'vue'
import BlueBox from './BlueBox.vue';
import GreenBox from './GreenBox.vue';
import RedBox from './RedBox.vue';

const props = defineProps(['box'])

const selectedComponent = computed(() => {
    if (props.box === 'blue-box')
        return BlueBox
    else if (props.box === 'green-box')
        return GreenBox
    else if (props.box === 'red-box')
        return RedBox
})

</script>

<template>
    <div class="yellow-box">
        <component :is="selectedComponent" class="center"></component>
    </div>
</template>

<style scoped>
.yellow-box {
    flex: 1;

    width: 100%;
    height: 100%;

    background-color: yellow;

    display: flex;
    justify-content: center;
    align-items: center;
}
.center {
    flex: 0 100px;

    height: 100px;
    border-radius: 999px;
}
</style>