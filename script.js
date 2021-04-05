const myLibrary = [];
const body = document.querySelector('body');

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
        myLibrary.forEach(book => {
                const box = document.createElement('div');
                box.appendChild(document.createTextNode(Object.values(book)));
                body.appendChild(box);
        });
}

function main() {
        addBookToLibrary(askUser());
        addBookToLibrary(askUser());
        displayLibrary();
}

main();
