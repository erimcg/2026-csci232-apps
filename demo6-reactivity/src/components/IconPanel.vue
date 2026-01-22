<script setup>
const { data } = defineProps(['data'])

</script>

<template>
    <section :style="{'background': `linear-gradient( 223deg, ${data.colors[0]}, ${data.colors[1]} )`}">
        <span class="material-symbols-outlined" :style="{'font-size': data.style['font-size'] + 'px'}">
            {{ data.icon }}
        </span>
    </section>
</template>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    user-select: none;
    -webkit-user-select: none;
}
</style>