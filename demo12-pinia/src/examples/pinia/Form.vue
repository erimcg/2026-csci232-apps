<script setup>
import Book from '../../models/Book.js'
import { ref, useTemplateRef, computed, toRaw } from 'vue'

import { useBookStore } from './bookStore.js'
const bookStore = useBookStore()

const form = useTemplateRef('form')
const book = ref(new Book())

function addBook() {
    const x = toRaw(book.value)
    bookStore.add(x)

    form.value.reset()
    book.value = new Book()
}

const titleIsEmpty = computed(() => {
    return book.value.title.trim().length == 0
})

const authorIsEmpty = computed(() => {
    return book.value.author.trim().length == 0
})

const isDisabled = computed(() => {
    return titleIsEmpty.value || authorIsEmpty.value
})

</script>

<template>
    <div id="form-root">
        <h3>New Book</h3>

        <form ref="form">
            <div class="form-item">
                <label for="title">Title</label><br>
                <input id="title" v-model="book.title" @input="checkInput" ref="titleInput"><br>
                <span :class="{ 'hidden': !titleIsEmpty }" class="warning">Required</span>
            </div>

            <div class="form-item">
                <label for="author">Author</label><br>
                <input id="author" v-model="book.author" ref="authorInput"><br>
                <span :class="{ 'hidden': !authorIsEmpty }" class="warning">Required</span>
            </div>
        </form>

        <button class="button" @click="addBook" :disabled="isDisabled">Add</button>
    </div>
</template>

<style scoped>
#form-root {
    padding: 20px;
    background-color: gainsboro;

    align-self: flex-start;
    border-radius: 10px;
    min-width: 200px;
}

form {
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.form-item {
    margin-bottom: 10px;
}

button {
    background-color: #5facff;
    color: white;
    font-size: 12px;

    padding: 8px 24px;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;

    text-align: center;
}

button:disabled {
    opacity: 0.6;
    filter: grayscale(1);
    cursor: not-allowed;   
}

button:hover:not(:disabled) {
    background-color: #51a5ff;
}

button:active:not(:disabled) {
    transform: scale(0.95);
}

.warning {
    color: red;
    font-size: small;
}

.hidden {
    visibility: hidden
}
</style>