// Form data variables
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read')
const del = document.querySelectorAll('.del');

let id = 0;


// Book array
const myLibrary = []; 

// Book constructor
function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

// Add book to array
function addBookToLibrary() {
    event.preventDefault(); // Prevent reload on submission
    
    
    if (    // Error handling
        title.value == "" ||
        author.value == "" ||
        pages.value == ""
    ) {
        window.alert('Fully fill form');
        title.value = "";
        author.value = "";
        pages.value = "";
    } 
    else {
    
        // Create new book object
        if (read.checked == true) {
            const book = new Book(title.value, author.value, pages.value, 'COMPLETE', id);
            myLibrary.push(book);
        } else {
            const book = new Book(title.value, author.value, pages.value, 'INCOMPLETE', id);
            myLibrary.push(book);
        }

        // Add book to library array
        display();
        title.value = "";
        author.value = "";
        pages.value = "";
    }
}

// Submit button to add book
const subBtn = document.querySelector('.submit-button');

subBtn.addEventListener('click', addBookToLibrary);

function display() {
    const table = document.querySelector('.table');
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
    const tableData2 = document.createElement('td');
    const tableData3 = document.createElement('td');
    const tableData4 = document.createElement('td');
    const tableData5 = document.createElement('td');

    for(i in myLibrary) {
        tableData.textContent = myLibrary[i].title;
        tableRow.append(tableData);

        tableData2.textContent = myLibrary[i].author;
        tableRow.append(tableData2);

        tableData3.textContent = myLibrary[i].pages;
        tableRow.append(tableData3);

        tableData4.textContent = myLibrary[i].read;
        tableRow.append(tableData4);

        tableData5.textContent = 'Delete';
        tableData5.classList.add("del");
        tableData5.setAttribute("id", `${id}`);
        tableData5.setAttribute("onclick", "deleteRow(this)");
        tableRow.append(tableData5);
    }

    id++;
    table.append(tableRow);

    console.table(myLibrary);
}

function deleteRow(row) {

    const libId = myLibrary.findIndex((num) => num.id == row.id);
    //console.log(` ID = ${libId}`);
    
    const table = document.querySelector('.table');
    let i = row.parentNode.rowIndex;
    // //console.log(`DELETING ROW: ${row.id}`);
    myLibrary.splice(libId, 1);
    table.deleteRow(i);

    id--;
    


    console.table(myLibrary);
} 