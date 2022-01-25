let myLibrary = [];

class book {
    letructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function displayBooks() {
    for (i = 0; i <= myLibrary.length; i++) {
        
    }
}

function createBook(item) {
    let library = document.querySelector('#library-container');
    let bookDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let authDiv = document.createElement('div');
    let pageDiv = document.createElement('div');
    let removeBtn = document.createElement('button');
    let readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(titleDiv);
    
    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');

    readBtn.classList.add('read-btn');
    bookDiv.appendChild(readBtn);
    if (item.read === false ) {
        readBtn.textContent = "Unread";
        readBtn.style.backgroundColor = '#e04f63';
    } else {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = '#63da63';
    }

    removeBtn.textContent = "Remove";
    removeBtn.setAttribute('id', 'remove-btn');
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.spliace(myLibrary.indexOf(item), 1);
        ()
        ()
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        ()
        ()
    });
}

function addBook() {
    prompt()
}