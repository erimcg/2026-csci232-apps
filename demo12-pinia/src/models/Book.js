export default class Book {
    constructor(title, author) {
        this.title = title ?? ''
        this.author = author ?? ''
    }

    clear() {
        this.title = ''
        this.author = ''
    }
}
