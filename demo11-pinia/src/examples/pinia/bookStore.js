import initialBookSet from '../../data/books.js'  //initial set of books
import Book from '@/models/Book.js'
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', () => {
  const books = reactive([...initialBookSet])

  function add(book) {
    if (book instanceof Book) {
      books.push(book)
    }
  }

  function remove(index) {
    if (books.length == 0) {
      return
    }
    if (index >= 0 && index < books.length) {
      books.splice(index, 1)
    }
  }

  return { books, add, remove }
})
