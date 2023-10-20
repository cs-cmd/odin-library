import { Book } from "./book.js";
import { postBook } from "./list-functions.js";
import { addBookToPage } from "./add-book.js";

const bookListElement = document.querySelector('.book-list');
    

// counter to uniquely ID books in array
let counter = 0;

// books array
let books = [];

document.querySelector('.submit-button').addEventListener('click', function(e) {
    e.preventDefault();
    let bookName = document.getElementById('book-name').value;
    let author = document.getElementById('book-author').value;
    let pages = parseInt(document.getElementById('page-count').value);
    let isRead = document.getElementById('is-read-checkbox').checked;
    
    let b = new Book(bookName, author, pages, isRead, ++counter);

    if(postBook(b)) {
        books.push(b);
        addBookToPage(bookListElement, b);        
    }
    else {
        console.log('posting book failed...');
        // error, not valid
    }
});

export function removeBookFromArray(bookCounter) {
    let bookIndex = -1
    for(let i = 0; i < books.length; ++i) {
        if(books[i].getCounter() == bookCounter) {
            bookIndex = i;
            break;
        }
    }

    if (bookIndex == -1) {
        // error, return
        return;
    }

    books.splice(bookIndex, 1);
    return;
}