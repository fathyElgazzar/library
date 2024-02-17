'use strict';

const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

Book.prototype.study = function () {
  console.log('Read the book');
};

const deepWork = new Book('Deep work', 'Cal new port', 250, 'not read yet');

const egoIsTheEnemy = new Book(
  'Ego Is The Enemy',
  'Cal new port',
  250,
  'not read yet'
);

const the4HoursWorkWeek = new Book(
  'The 4 Hours Work Week',
  'Cal new port',
  250,
  'Read'
);

console.log(deepWork.info());

// Add book function
function addBookToLibrary() {
  myLibrary.push(deepWork, egoIsTheEnemy, the4HoursWorkWeek);
}
addBookToLibrary();
console.log(myLibrary);

for (let i = 1; i <= myLibrary.length; i++) {
  console.table(myLibrary[i]);
}
