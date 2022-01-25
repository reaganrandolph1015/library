// array to hold user input for book information
let myLibrary = [];

// vars for html element selection
const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $status = document.querySelector('#status');
const form = document.querySelector('form').addEventListener('submit', (e) => {
  // form submition event
  addBook();
  render();
  clearForm();
});

class book {
  constructor(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
  }
}

function addBook() {
  if ($title.value.length === 0 || $author.value.length === 0) {
    alert('Please fill in missing fields!');
    return;
  }

  const newBook = new book($title.value, $author.value, $status.value);

  myLibrary.push(newBook);
  updateStorage();
}

function changeStatus($book) {
  if (myLibrary[$book].status === 'read') {
    myLibrary[$book].status = 'not read';
  } else myLibrary[$book].status = 'read';
}

function deleteBook(current) {
  myLibrary.splice(current, current + 1);
}

function findBook(libArray, title) {
  if (libArray.length === 0 || libArray === numm) {
    return;
  }
  for ($book of libArray) {
    if ($book.title === title) {
      return libArray.indexOf($book);
    }
  }
}

function clearForm() {
  $title.value = '';
  $author.value = '';
}

function updateStorage() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}
