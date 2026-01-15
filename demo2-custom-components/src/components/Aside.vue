<script setup>
import Header from './Header.vue';
import Button from './Button.vue';
import { getCategories } from '../data';

let emits = defineEmits(['switch-category'])

const categories = getCategories()
</script>

<template>
    <aside>
        <Header tag="h2" text="Categories" class="header" />

        <div id="content">
            <Button 
                v-for="item in categories" 
                :label="item" 
                @switch-category="$emit('switch-category', $event)"/>
        </div>
    </aside>
</template>

<style scoped>
aside {
    background-color: rgb(241, 240, 236);

    display: flex;
    flex-direction: column;
    gap: 10px;
}

header {
    background-color: rgb(230, 227, 216);
    color: rgb(42, 38, 25);
}

#content {
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
</style>