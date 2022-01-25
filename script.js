// array to hold user input for book information
let myLibrary = [];

const DEFAULT = [
  { title: 'The Lord of the Rings', author: 'Tolkien', status: 'unread' },
  { title: 'Alice in Wonderland', author: 'Lewis Caroll', status: 'unread' },
  { title: 'Naruto', author: 'Masashi Kishimoto', status: 'unread' },
];

// vars for html element selection
const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $status = document.querySelector('#status');
const tableBody = document.querySelector('#tableBody');
const table = document.querySelector('table').addEventListener('click', (e) => {
  const currentTarget = e.target.parentNode.parentNode.childNodes[1];
  if (e.target.innerHTML == 'delete') {
    if (confirm('are you sure you want to delete ${currentTarget.innerText}'))
      deleteBook(findBook(myLibrary, currentTarget.innerText));
  }
  if (e.target.classList.contains('stat-button')) {
    changeStatus(findBook(myLibrary, currentTarget.innerText));
  }

  updateStorage();
  render();
});
const form = document.querySelector('form').addEventListener('submit', (e) => {
  // form submition event
  e.preventDefault();
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
  if (libArray.length === 0 || libArray === null) {
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

function checkStorage() {
  if (localStorage.getItem('myLibrary')) {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  } else {
    myLibrary = DEFAULT;
  }
}

function render() {
  checkStorage();

  tableBody.innerHTML = '';

  myLibrary.forEach(($book) => {
    const htmlBook = `
    <tr>
    <td>${$book.title}</td>
    <td>${$book.author}</td>
    <td><button class="stat-button">${$book.status}</button></td>
    <td><button class="delete">Delete</button></td>
    </tr>
    `;

    tableBody.insertAdjacentHTML('afterbegin', htmlBook);
  });
}

render();
