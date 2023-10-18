// remove book from list and HTML element
export function removeFromList(booksDiv, bookCard) {
    // counter of book and index of book in list
    let bookCounter = bookCard.getAttribute('counter');

    // remove book index from array and delete from div
    booksDiv.removeChild(bookCard);
    return bookCounter;
}

function validateInput(book) {
    return (book.title.length > 0 &&
            book.author.length > 0 &&
            !isNaN(book.pageCount));
}

export function postBook(book) {
    if (!validateInput(book)) {
        return false;
    }

    return true;
}

export function clearList(bookDiv, bookList) {
    // prompt user for confirmation

}