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
    <section>
        <h3>List {{ type }}</h3>

        <div class="list">
            <div class="block" :class="type" v-for="item in arr">
                <span>{{ item }}</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 10px;

    align-items: center;
    overflow-y: auto;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.block {
    width: 200px;
    min-height: 50px;
    margin-inline: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    border-radius: 20px;
}

.A {
    background-color: gainsboro;
}

.B {
    background-color: rgb(247, 204, 204);
}
</style>