const myLibrary = [];

function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

function askUser() {
        const test = prompt(
                'Enter title, author, page count, read status, all seperated by a comma',
                'The Pale King, David Foster Wallace, 548, true'
        );
        return test.split(',');
}

function addBookToLibrary(bookParams) {
        const book = new Book(bookParams[0], bookParams[1], bookParams[2], bookParams[3]);
        myLibrary.push(book);
}

function displayLibrary() {
        console.log(myLibrary);
}

function main() {
        addBookToLibrary(askUser());
        displayLibrary();
}

main();
