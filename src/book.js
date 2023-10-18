// books constructor
export function Book(name, author, pageCount, counter) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.counter = counter;
    this.read = false;
    this.info = function() {
        return `${this.name}, by ${this.author}; ${this.pageCount} page(s)`;
    }
}