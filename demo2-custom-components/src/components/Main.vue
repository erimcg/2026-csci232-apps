<script setup>
import Header from './Header.vue';
import Article from './Article.vue';
import { getArticles } from '../data.js'
import { watch } from 'vue'

const props = defineProps(['category'])

let articles = getArticles(props.category)

watch(
    () => props.category, 
    (val) => { articles = getArticles(val) }
)
</script>

<template>
    <main>
        <Header tag="h2" :text="category" class="header" />

        <div id="content">
            <Article v-for="item in articles" :info="item"/>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: rgb(234, 239, 239);

    display: flex;
    flex-direction: column;
    gap: 10px;
}

header {
    background-color: rgb(200, 215, 217);
    color: rgb(20, 30, 32);
}

#content {
    margin: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>