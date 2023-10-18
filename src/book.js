function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.info = function() {
        return `${this.name}, by ${this.author}; ${this.pageCount} pages`;
    }
}