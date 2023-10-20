export class Book {
    // // default constructor
    // constructor() {
    //     this.name = '';
    //     this.author = '';
    //     this.pages = 0;
    //     this.readStatus = false;
    //     this.counter = 0;
    // }

    // param constructor
    constructor(name, author, pages, readStatus, counter) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.counter = counter;
    }

    /*************** GETTERS/SETTERS ***************/
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }

    getAuthor() {
        return this.author;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }

    getPages() {
        return this.pages;
    }
    setPages(pageCount) {
        this.pages = pageCount;
    }

    isRead() {
        return this.readStatus;
    }
    toggleReadStatus() {
        this.readStatus = !this.readStatus;
    }

    // counter is read-only
    getCounter() {
        return this.counter;
    }
    /***********************************************/


}