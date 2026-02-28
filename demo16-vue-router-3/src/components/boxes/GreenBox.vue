<script setup>
import { computed } from 'vue'
import BlueBox from './BlueBox.vue';
import YellowBox from './YellowBox.vue';

const props = defineProps(['box'])

const component = computed(() => {
    return props.box === 'blue-box' ? BlueBox : YellowBox
})

</script>

<template>
    <div class="green-box">
        <component :is="component" class="center"></component>
    </div>
</template>

<style scoped>
.green-box {
    flex: 1;

    width: 100%;
    height: 100%;

    background-color: green;

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