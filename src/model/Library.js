import Book from './Book.js';

const library = (() => {
    const books = [];

    // Create book based on parameters, then return object for use
    const addBook = (bookName, author, pages, isRead) => {
        const book = new Book(bookName, author, pages, isRead);
        books.push(book);
        return book;
    }

    // Adds book object to list
    const addBookObj = (bookObj) => {
        books.push(bookObj);
    }

    // Removes specified book from list
    const removeBook = (book) => {
        for (let i = 0; i < books.length; ++i) {
            if (books[i] === book) {
                books.splice(i, 1);
                return;
            }
        }
    };

    const count = () => books.length;

    const clear = () => books = [];

    return { addBook, addBookObj, removeBook, count, clear };
})();

export default library;