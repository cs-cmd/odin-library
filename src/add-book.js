function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.info = function() {
        return `${this.name}, by ${this.author}; ${this.pageCount} page(s)`;
    }
}

let books = [];


function addBookToList(book) {
    let lastInsert = books.push(book) - 1;
    updateBookList(book, lastInsert);
}

function updateBookList(book, index) {
    const bookListElement = document.querySelector('.book-list');
    let bookEntry = document.createElement('div');

    bookEntry.classList.add('card');

    let bookTitleEle = document.createElement('h1');
    bookTitleEle.innerText = book.name;

    let bookAuthorEle = document.createElement('h3');
    bookAuthorEle.innerText = book.author;

    let bookPageCountEle = document.createElement('p');
    bookPageCountEle.innerText = book.pageCount;

    bookEntry.append(bookTitleEle, bookAuthorEle, bookPageCountEle);
    bookEntry.setAttribute('index', index);
    
    bookListElement.appendChild(bookEntry);
}

function createBook(name, author, pages) {
    return new Book(name, author, pages);
}

function validateInput(book, author, pages) {
    console.log(book.length);
    console.log(author.length);
    console.log(pages);
    return (book.length > 0 &&
            author.length > 0 &&
            !isNaN(pages));
}

function postBook() {
    let name = document.getElementById('book_name').value;
    let author = document.getElementById('book_author').value;
    let pages = parseInt(document.getElementById('page_count').value);

    if (!validateInput(name, author, pages)) {
        return;
    }

    let b = createBook(name, author, pages);

    addBookToList(b);
}

document.querySelector('.submit-button').addEventListener('click', postBook);
