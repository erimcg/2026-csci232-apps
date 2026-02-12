import initialBookSet from '../../data/books.js'  //initial set of books
import Book from '@/models/Book.js'
import { reactive } from 'vue'

export const store = {
    books: reactive([...initialBookSet]),

    add: function add(book) {
        if (book instanceof Book) {
            this.books.push(book)
        }
    },
    
    remove: function remove(index) {
        if (this.books.length == 0) {
            return
        }
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1)
        }
    }
}

export default store
