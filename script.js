const btn = document.querySelector('#btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

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
    const book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);

    
    addToList(book);

    // Resets form fields
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;

}

function addToList(item) {
    const listings = document.querySelector('.listings');
    const listRow = document.createElement('div');
    listRow.classList.add('list-row');

    const itemTitle = document.createElement('div');
    const itemAuth = document.createElement('div');
    const itemPages = document.createElement('div');
    const itemRead = document.createElement('div');

    itemTitle.textContent = item.title;
    itemAuth.textContent = item.author;
    itemPages.textContent = item.pages;
    
    item

    if (item.completed === true) {
        itemRead.textContent = "COMPLETED";
    }
    else {
        itemRead.textContent = "INCOMPLETE";
    }

    // Append to listRow and listing
    listRow.append(itemTitle);
    listRow.append(itemAuth);
    listRow.append(itemPages);
    listRow.append(itemRead);

    listings.append(listRow);


    
}