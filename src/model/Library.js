import Book from './Book.js';

const library = (() => {
    const books = [];

    const addBook = (bookName, author, pages, isRead) => {
        const book = new Book(bookName, author, pages, isRead);
        books.push(book);
        return book;
    }

    const addBookObj = (bookObj) => {
        books.push(bookObj);
    }

    const removeBook = (book) => {
        const len = books.length;
        
        for (let i = 0; i < len; ++i) {
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