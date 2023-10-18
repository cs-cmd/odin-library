// books constructor
export function Book(title, author, pageCount, counter) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.counter = counter;
    this.read = false;
    this.info = function() {
        return `${this.name}, by ${this.author}; ${this.pageCount} page(s)`;
    }
}
