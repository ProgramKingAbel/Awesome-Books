const books = localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : [];

console.log(books);

const addBook = (e) => {
    e.preventDefault();

    let book = {
        id: Date.now(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
    }
    if (book.id && book.title && book.author) {
        books.push(book);
    }
    document.querySelector('form').reset();

    localStorage.setItem('book', JSON.stringify(books));
    location.reload();
}

books.forEach((element, e) => {
    const allBooks = document.querySelector('.all-books');
    const book = document.createElement('div');
    book.classList = 'book';

    book.innerHTML = `
    
    <h2 class="title">${books[e].title}</h2>
    <p class="author">${books[e].author}</p>
    <button class="remove">Remove</button>
    <hr />
    `;
    allBooks.append(book);
    
});

function activateDelete() {
    let remove = document.querySelectorAll('.remove');
    console.log(remove);
    remove.forEach((btn, i) => {
        btn.addEventListener('click', () => { deleteBook(i) })
               
    })
}

//filter function

function deleteBook(i) {
    books.splice(i, 1);
    localStorage.setItem('book', JSON.stringify(books));
    location.reload();
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addBook);
    activateDelete();
   
})