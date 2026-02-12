<script setup>
import Form from './Form.vue'
import Preview from './Preview.vue';
</script>

<template>
    <section>
        <h1>JS Store</h1>
        <div class="content">
            <Form />
            <Preview />
        </div>
    </section>
</template>

<style scoped>
.content {
    display: flex;
    gap: 50px;
    padding: 0 20px 20px 20px;
}
</style>