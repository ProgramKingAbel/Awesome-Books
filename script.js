/* eslint-disable max-classes-per-file */

// Time code 
const currentTime = document.querySelector('.current-time');

function showTime() {
  let time = new Date();
  currentTime.innerHTML = time.toLocaleTimeString('en-US', { hour12: true });
  setTimeout(showTime, 1000);
}
showTime();

//Date Code

function currentDate() {
  let now = new Date();

  //return integer
  let dayName = now.getDay(),
    dayNum = now.getDate(),
    month = now.getMonth(),
    year = now.getFullYear();
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  //collect ids of date
  const collect = ["day", "daynum", "month", "year"];

  // return value array with number as a index
  const val = [weekDay[dayName], dayNum, months[month], year];

  for (var i = 0; i < collect.length; i++) {
    document.getElementById(collect[i]).firstChild.nodeValue = val[i];
  }
}
currentDate();



// Book class to represent a book
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

// Store class to handle local storage
class Store {
  static getBooks() {
    const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    window.alert('record added');
  }

  static removeBook(i) {
    const books = Store.getBooks();
    books.splice(i, 1);
    localStorage.setItem('books', JSON.stringify(books));
    document.location.reload();
    
  }
}

// Design Frontend of our library

class library {
  static showBooks() {
    const books = Store.getBooks();

    books.forEach((book) => library.addBook(book));
  }

  static addBook(book) {
    const allBooks = document.querySelector('.all-books');
    const newBook = document.createElement('div');
    newBook.classList = 'book';

    newBook.innerHTML = `
      
      <p class="title">"${book.title}" by <span></span>${book.author}</p>
      <button class="remove">Remove</button>
    
      `;

    allBooks.append(newBook);
  }

  static clearInput() {
    document.querySelector('form').reset();
  }
}

// Event to display books
document.addEventListener('DOMContentLoaded', library.showBooks);
// Event to add a book
document.querySelector('#add-book').addEventListener('submit', (e) => {
  // prevent Default
  e.preventDefault();

  // get values

  const id = Date.now();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (id && title && author) {
    // create an instance of class book

    const book = new Book(id, title, author);
    library.addBook(book);

    // add book to store
    Store.addBook(book);
    library.clearInput();
  }
});

// Event to call a function to remove a book
function activateDelete() {
  const remove = document.querySelectorAll('.remove');

  remove.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      Store.removeBook(i);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  activateDelete();
  disappear();

});
