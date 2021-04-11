const myLibrary = [];

const divLibrary = document.createElement('div');
divLibrary.id = 'div_library';
document.body.appendChild(divLibrary);

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
        document.getElementById('div_library').innerHTML = '';

        myLibrary.forEach(book => {
                const divBook = document.createElement('div');
                divBook.className = 'div_book';
                divBook.appendChild(document.createTextNode(Object.values(book)));

                divLibrary.appendChild(divBook);
        });
}

function main() {}

document.getElementById('button_new').addEventListener('click', () => {
        addBookToLibrary(askUser());
        displayLibrary();
});

main();
