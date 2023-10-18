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

// toggles both, keeping one inactive and one active
function toggleReadStatus(bookEntry) {
    bookEntry.classList.toggle('is-read');
    bookEntry.classList.toggle('is-unread');
}

// update book list
function addBook(book, isRead) {
    // insert book into array
    books.push(book) - 1;

    const bookListElement = document.querySelector('.book-list');
    
    
    let bookEntry = document.createElement('div');
    bookEntry.classList.add('card', 'is-read', 'is-unread');
    bookEntry.classList.toggle('is-read');
    bookEntry.classList.toggle('is-unread');

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

    if(isRead) {
        bookEntry.classList.toggle('is-read');
    }
    else {
        bookEntry.classList.toggle('is-unread');
    }

    let toggleReadButton = document.createElement('button');
    toggleReadButton.innerText = 'Toggle read status';
    toggleReadButton.addEventListener('click', function(e) {
        toggleReadStatus(e.target.parentElement)
    });

    // append all to book card, add book card to div
    bookEntry.append(bookTitleEle, bookAuthorEle, bookPageCountEle, bookRemove, toggleReadButton);
    bookEntry.setAttribute('counter', book.counter);
    bookListElement.appendChild(bookEntry);
}

function validateInput(book, author, pages) {
    return (book.length > 0 &&
            author.length > 0 &&
            !isNaN(pages));
}

function postBook() {
    let name = document.getElementById('book-name').value;
    let author = document.getElementById('book-author').value;
    let pages = parseInt(document.getElementById('page-count').value);
    let isRead = document.getElementById('has-read-checkbox').checked;
    if (!validateInput(name, author, pages)) {
        return;
    }

    let b = new Book(name, author, pages, ++counter);

    addBook(b, isRead);
}

document.querySelector('.submit-button').addEventListener('click', function(e) {
    e.preventDefault();
    postBook();
});
