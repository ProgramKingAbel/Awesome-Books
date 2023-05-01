const books = localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : [];

console.log(books);


// ADD CODE HERE -------------------------------------------------------------




//ADD CODE HERE -------------------------------------------------------------

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