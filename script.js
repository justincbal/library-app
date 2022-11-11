const btn = document.querySelector('#btn');


// btn.addEventListener('click', (e) => {
//     e.preventDefault();

// })

btn.addEventListener('click', addBookToLibrary);



/* ---------------------------------------------- */
let myLibrary = []; // Book array

// Book constructor
function Book(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
}

function addBookToLibrary() {
    event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    console.log(book);
    console.log(myLibrary);
}

