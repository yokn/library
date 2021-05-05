const myLibrary = [];

const divLibrary = document.createElement('div');
divLibrary.className = 'container-fluid';
divLibrary.id = 'div_library';
document.body.appendChild(divLibrary);

function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

function toggleReadStatus(book, button_read) {
        book.read = !book.read;
        button_read.id = button_read.id === 'true' ? 'false' : 'true';
}

function askUser() {
        const test = prompt(
                'Enter title, author, page count, read status, all seperated by a comma',
                'The Pale King,David Foster Wallace,548,true'
        );
        return test.split(',');
}

function addBookToLibrary(bookParams) {
        const book = new Book(bookParams[0], bookParams[1], bookParams[2], bookParams[3]);
        myLibrary.push(book);
}

function deleteBook(index) {
        myLibrary.splice(index, 1);
}

function displayLibrary() {
        document.getElementById('div_library').innerHTML = '';

        for (const [index, book] of myLibrary.entries()) {
                const divBook = document.createElement('div');
                divBook.id = 'div_book';
                divBook.className = 'card';
                divBook.dataset.index = index;

                divBook.appendChild(document.createTextNode(Object.values(book)));

                const button_delete = document.createElement('button');
                button_delete.innerHTML = 'Delete';
                button_delete.addEventListener('click', () => {
                        deleteBook(index);
                        displayLibrary();
                });
                divBook.appendChild(button_delete);

                const button_read = document.createElement('button');
                button_read.id = book.read;
                button_read.innerHTML = 'Read';
                button_read.addEventListener('click', () => {
                        toggleReadStatus(book, button_read);
                });
                divBook.appendChild(button_read);

                divLibrary.appendChild(divBook);
        }
}

function main() {}

document.getElementById('button_new').addEventListener('click', () => {
        addBookToLibrary(askUser());
        displayLibrary();
});

main();
