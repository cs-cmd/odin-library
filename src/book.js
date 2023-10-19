class Book {
    // default constructor
    constructor() {
        this.name = '';
        this.author = '';
        this.pages = 0;
        this.readStatus = false;
    }

    // param constructor
    constructor(name, author, pages, readStatus) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
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

    getReadStatus() {
        return this.readStatus;
    }
    toggleReadStatus() {
        this.readStatus 
    }
    /***********************************************/

    
}