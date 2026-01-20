<script setup>
import { onUnmounted, onActivated, onDeactivated } from 'vue'

const arr = Array.from({ length: 1000 }, (_, i) => i + 1);

const intervalId = setInterval(() => console.log('tick B'), 2000)

onActivated(() => {
    console.log(`List B activated`)
})

onDeactivated(() => {
    console.log(`List B deactivated`)
})

onUnmounted(() => {
    clearInterval(intervalId);
    console.log('List B unmounted');
});

</script>

<template>
    <div>
        <h3>List B</h3>
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
    background-color: gainsboro;

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