<script setup>
import { onUnmounted, onActivated, onDeactivated } from 'vue'

const arr = Array.from({ length: 100 }, (_, i) => i + 1);

const intervalId = setInterval(() => console.log('tick A'), 2000)

onActivated(() => {
    console.log(`List A activated`)
})

onDeactivated(() => {
    console.log(`List A deactivated`)
})

onUnmounted(() => {
    clearInterval(intervalId);
    console.log('List A unmounted');
});

</script>

<template>
    <div>
        <h3>List A</h3>
        <br>
        <section class="list">
            <div class="block" v-for="item in arr">
                <span>{{ item }}</span>
            </div>
        </section>
    </div>
</template>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    overflow-y: auto;
    height: calc(100vh - 100px);
}

.block {
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