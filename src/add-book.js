// books constructor
function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.counter = counter;
    this.info = function() {
        return `${this.name}, by ${this.author}; ${this.pageCount} page(s)`;
    }
}

// counter to uniquely ID books in array
let counter = 0;

// books array
let books = [];

// pushes book into list, updates book list with last insert index
function addBookToList(book) {
    let lastInsert = books.push(book) - 1;
    updateBookList(book, lastInsert);
}

// remove book from list and HTML element
function removeFromList(booksDiv, bookCard) {
    // counter of book and index of book in list
    let bookCounter = bookCard.getAttribute('counter');
    let bookIndex = -1;

    for(let i = 0; i < books.length; ++i) {
        // if the counter of the book in array equals bookCounter var, set 
        // book index to i
        if (books[i].counter == bookCounter) {
            bookIndex = i;
            break;
        }
    }

    // if bookIndex is -1, error in book deletion
    if (bookIndex === -1) {
        // error, no book found
        console.log('book deletion error');
        return;
    }

    // remove book index from array and delete from div
    books.splice(bookIndex, 1);
    booksDiv.removeChild(bookCard);
}

// update book list
function updateBookList(book) {
    const bookListElement = document.querySelector('.book-list');
    
    
    let bookEntry = document.createElement('div');
    bookEntry.classList.add('card');

    // create vars for book name, author, pages, and button to remove
    let bookTitleEle = document.createElement('h1');
    bookTitleEle.innerText = book.name;

    let bookAuthorEle = document.createElement('h3');
    bookAuthorEle.innerText = book.author;

    let bookPageCountEle = document.createElement('p');
    bookPageCountEle.innerText = book.pageCount;

    let bookRemove = document.createElement('button');
    bookRemove.innerText = 'Remove';
    bookRemove.addEventListener('click', function(e) {
        removeFromList(bookListElement, e.target.parentElement);
    });

    // append all to book card, add book card to div
    bookEntry.append(bookTitleEle, bookAuthorEle, bookPageCountEle, bookRemove);
    bookEntry.setAttribute('counter', book.counter);
    bookListElement.appendChild(bookEntry);
}

function validateInput(book, author, pages) {
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

    let b = new Book(name, author, pages, ++counter);

    addBookToList(b);
}

document.querySelector('.submit-button').addEventListener('click', function(e) {
    e.preventDefault();
    postBook();
});
