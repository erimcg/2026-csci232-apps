<script setup>
import bookStore from './bookStore.js'
</script>

const books = []
<template>
    <div class="preview-root">
        <h3>Books</h3>

        <div class="book-list">
            <div v-for="(book, index) of bookStore.books" :key="`book${index}`" class="book">
                <div class="delete-button" @click="bookStore.remove(index)">
                    <span class="delete">&#x2715</span>
                </div>
                <div v-for="(value, key) of book" :key="`book${index}:${key}`">
                    <span class="book-property">{{ key }}</span>: <span>{{ value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.preview-root {
    background-color: gainsboro;
    padding: 20px;
    border-radius: 10px;
    min-width: 200px;
}

.book-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.book {
    background-color: rgb(232, 230, 230);
    padding: 30px 20px 20px 20px;
    position: relative;
    border-radius: 20px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.book-property {
    text-transform: capitalize;
}

.delete-button {
    position: absolute;
    right: 5px;
    top: 5px;

    width: 20px;
    height: 20px;

    padding: 3px;
    margin: 0;
    border: 0;
    border-radius: 50%;

    background-color: rgb(250, 208, 208);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.1s ease-in-out;
}

.delete-button:hover {
    background-color: white;
}

.delete-button:active {
    transform: scale(0.90);
}
</style>