import { toggleReadStatus } from './button-funcs.js';
import { removeFromList } from './list-functions.js';
import { removeBookFromArray } from './driver.js';
// update book list
export function addBookToPage(pageListDiv, book) {   
    let bookCard = createBookCard(book, pageListDiv);

    pageListDiv.appendChild(bookCard);
}

function createBookCard(book, pageListDiv) {
    let bookEntry = document.createElement('div');
    bookEntry.classList.add('card', 'is-read', 'is-unread');
    bookEntry.classList.toggle('is-read');
    bookEntry.classList.toggle('is-unread');

    // create vars for book name, author, pages, and button to remove
    let bookTitleEle = document.createElement('h1');
    bookTitleEle.innerText = `"${book.title}"`;

    let bookAuthorEle = document.createElement('h3');
    bookAuthorEle.innerText = book.author;

    let bookPageCountEle = document.createElement('p');
    bookPageCountEle.innerText = book.pageCount;

    if(book.read) {
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


    let bookRemove = document.createElement('button');
    bookRemove.innerText = 'Remove';
    bookRemove.addEventListener('click', function(e) {
        let counter = removeFromList(pageListDiv, e.target.parentElement);
        removeBookFromArray(counter);
    });

    // append all to book card, add book card to div
    bookEntry.append(bookTitleEle, bookAuthorEle, bookPageCountEle, bookRemove, toggleReadButton);
    bookEntry.setAttribute('counter', book.counter);

    return bookEntry;
}