//Book class to represent a book
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}
//Design Frontend of our library

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

//Store class to handle local storage
class Store {
  static getBooks() {
    let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []; 
    return books;

  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    document.location.reload();
  }

  static removeBook(i) {
    const books = Store.getBooks();
    books.splice(i, 1);
    localStorage.setItem('books', JSON.stringify(books));
    document.location.reload();
  }
}

// --------------------------------a--------------d--------------d-------------------------

