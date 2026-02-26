<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const itemName = computed(() => {
    const str = route.params.id
    return str.charAt(0).toUpperCase() + str.slice(1)
})

</script>

<template>
    <div class="shop-item">
        <h1>{{ itemName }} Description</h1>

    </div>
</template>

<style scoped>

.shop-item {
    flex: 1;

    box-sizing: border-box;
    padding: 20px;

    background-color: rgb(249, 249, 249);

    display: flex;
    flex-direction: column;
}

</style>