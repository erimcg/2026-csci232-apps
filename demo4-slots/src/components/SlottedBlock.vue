<script setup>

</script>

<template>
    <section>
        <div>
            <slot></slot>
        </div>

        <div>
            <slot name="center" defaultStyle="font-weight: bold; color: red;"></slot>
        </div>

        <div v-if="$slots.end">
            <slot name="end"></slot>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: gainsboro;
    display: flex;
    align-items: center;

    padding: 20px;
}

section div {
    flex: 1;
}

:slotted(img) {
    width: 200px;
}
</style>