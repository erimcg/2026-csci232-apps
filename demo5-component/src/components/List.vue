<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

const props = defineProps(['type'])  // A | B

const arr = Array.from({ length: 10 }, (_, i) => i + 1);

const intervalId = setInterval(() => console.log(`tick ${props.type}`), 1500)

onMounted(() => {
    console.log(`List ${props.type} mounted`);
});

onActivated(() => {
    console.log(`List ${props.type} activated`)
})

onDeactivated(() => {
    console.log(`List ${props.type} deactivated`)
})

onUnmounted(() => {
    clearInterval(intervalId);
    console.log(`List ${props.type} unmounted`);
});

</script>

<template>
    <div>
        <h3>List {{ type }}</h3>
        <br>

        <section class="list">
            <div class="block" :class="type" v-for="item in arr">
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

    align-items: center;
}

.block {
    width: 200px;
    height: 100px;

    flex: 1 0 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    border-radius: 5px;
}

.A {
    background-color: gainsboro;
}

.B {
    background-color: rgb(247, 204, 204);
}
</style>