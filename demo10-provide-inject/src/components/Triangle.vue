<script setup>
    import { inject } from 'vue'

    const { count, toggleShape } = inject('count')
</script>

<template>
    <div class="triangle" @click="toggleShape">
        <span >{{ count }}</span>
    </div>
</template>

<style scoped>
.triangle {
    width: 0;
    height: 0;

    --side-size: 180px; 
    border-bottom: calc(var(--side-size) * 0.866) solid rgb(232, 230, 230);
    border-left: calc(var(--side-size) / 2) solid transparent;
    border-right: calc(var(--side-size) / 2) solid transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
}

span {
    position: absolute;
    top: 90px;
    /* transform: translateY(450%); */
}
</style>
