import library from "../model/Library.js";

const UI = (() => {
    // container item
    const booksDiv = document.querySelector('.book-list');

    // form field options
    const nameField = document.getElementById('book-name');
    const authorField = document.getElementById('book-author');
    const pagesField = document.getElementById('page-count');
    const isReadField = document.getElementById('is-read-checkbox');

    // toggles read status of book page item
    const toggleReadStatus = (bookEntry) => {
        bookEntry.classList.toggle('is-read');
    }

    // creates a page item for the book in the list
    const createBookPageItem = () => {
        let bookName = nameField.value;
        let author = authorField.value;
        let pages = parseInt(pagesField.value);
        let isRead = isReadField.checked;

        // add book based on params and return new object
        const book = library.addBook(bookName, author, pages, isRead);

        // create div
        let bookEntry = document.createElement('div');
        bookEntry.classList.add('card');

        // create vars for book name, author, pages, and button to remove
        let bookTitleEle = document.createElement('h1');
        bookTitleEle.innerText = `"${book.title}"`;

        let bookAuthorEle = document.createElement('h3');
        bookAuthorEle.innerText = book.author;

        let bookPageCountEle = document.createElement('p');
        bookPageCountEle.innerText = book.pageCount;

        // if is read, make background green, otherwise red
        if(isRead) {
            bookEntry.classList.toggle('is-read');
        }

        // toggles read status
        let toggleReadButton = document.createElement('button');
        toggleReadButton.innerText = 'Toggle read status';
        toggleReadButton.addEventListener('click', function(e) {
            toggleReadStatus(bookEntry);
        });

        // add button to remove book from list and array
        let bookRemove = document.createElement('button');
        bookRemove.innerText = 'Remove';
        bookRemove.addEventListener('click', function(e) {
            library.removeBook(book);
            bookEntry.remove();
        });

        // append all to book card, add book card to div
        bookEntry.append(bookTitleEle, bookAuthorEle, bookPageCountEle, bookRemove, toggleReadButton);

        booksDiv.appendChild(bookEntry);
    }

    return { createBookPageItem }
})();

export default UI;