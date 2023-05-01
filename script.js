const books = localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : [];

const addBook = (e) => {
  e.preventDefault();

  const book = {
    id: Date.now(),
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  if (book.id && book.title && book.author) {
    books.push(book);
  }
  document.querySelector('form').reset();

  localStorage.setItem('book', JSON.stringify(books));
  document.location.reload();
};

books.forEach((element, e) => {
  const allBooks = document.querySelector('.all-books');
  const book = document.createElement('div');
  book.classList = 'book';

  book.innerHTML = `
    
    <h2 class="title">${books[e].title}</h2>
    <p class="author">Author: <span></span>${books[e].author}</p>
    <button class="remove">Remove</button>
    <hr />
    `;
  allBooks.append(book);
});

// filter function

function deleteBook(i) {
  books.splice(i, 1);
  localStorage.setItem('book', JSON.stringify(books));
  document.location.reload();
}

function activateDelete() {
  const remove = document.querySelectorAll('.remove');
  remove.forEach((btn, i) => {
    btn.addEventListener('click', () => { deleteBook(i); });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', addBook);
  activateDelete();
});