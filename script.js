'use strict';

// Getting my elements
const bookContainer = document.querySelector('.book-container');
const btnAdd = document.getElementById('btn-add');
const fromContainer = document.querySelector('.form-container');
const submit = document.getElementById('btn-submit');
const bookName = document.getElementById('book-name');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const bookRead = document.getElementById('read');
const closeForm = document.querySelector('.close-form');

const myLibrary = [];

// Book constructor
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
//   };
// }

// //  To toggle the read status
// Book.prototype.toggleReadStatus = function () {
//   this.read = !this.read; // Toggle the read status
// };

// Book class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  get info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }

  toggleReadStatus() {
    this.read = !this.read; // Toggle the read status
  }
}

// Add book function
function addBookToLibrary() {
  const book = new Book(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.checked ? true : false
  );
  myLibrary.push(book);
  displayBooks();
}

// Display books
function displayBooks() {
  bookContainer.innerHTML = '';
  myLibrary.forEach((book, i) => {
    const html = `
    <div class="book" data-index-number="${i}">
    <h2 class="book-name">${book.title}</h2>
    <h3 class="author"><span>by: </span>${book.author}</h3>
    <span class="pages">Pages: ${book.pages}</span>
    <button class="btn btn-read btn-status">${book.read}</button>
    <span class="remove-book">X</span>
    </div>
    `;

    bookContainer.insertAdjacentHTML('beforeend', html);
  });
  deleteButtons();
  toggleRead();
}

// Event handlers
btnAdd.addEventListener('click', function (e) {
  fromContainer.style.visibility = 'visible';
  fromContainer.style.opacity = 1;
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  fromContainer.style.visibility = 'hidden';
  fromContainer.style.opacity = 0;
  if (!bookName.value) return;
  if (!bookAuthor.value) return;
  if (!bookPages.value) return;
  addBookToLibrary();
  bookName.value = bookAuthor.value = bookPages.value = '';
  bookRead.checked = false;
});

// toggle status
function toggleRead() {
  const btnStatus = document.querySelectorAll('.btn-status');

  btnStatus.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      myLibrary[index].toggleReadStatus();
      btn.classList.toggle('btn-read');
      displayBooks();
    });

    const book = myLibrary[index];
    btn.textContent = 'Read';
    if (book.read) {
      btn.classList.add('btn-read');
    } else if (!book.read) {
      btn.classList.remove('btn-read');
    }
  });
}

// A little to hard
function deleteBook(deleteBtn) {
  const book = deleteBtn.parentElement;
  let index = Number(book.dataset.indexNumber);
  myLibrary.splice(index, 1);
  displayBooks();
}

function deleteButtons() {
  const btnDelete = document.querySelectorAll('.remove-book');
  btnDelete.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      deleteBook(btn);
    })
  );
}

closeForm.addEventListener('click', (e) => {
  fromContainer.style.visibility = 'hidden';
  fromContainer.style.opacity = 0;
});
