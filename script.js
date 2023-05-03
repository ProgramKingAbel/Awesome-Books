/* eslint-disable max-classes-per-file */


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

