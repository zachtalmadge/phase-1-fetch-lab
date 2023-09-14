 async function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!\
  fetch('https://anapioficeandfire.com/api/books')
  .then(data => data.json())
  .then(books => {
    renderBooks(books)
  })
  //async/await version
  // let data = await fetch('https://anapioficeandfire.com/api/books')
  // let books = await data.json()
  //this will throw an error because JS is trying to call the function before the promise has resolved
  // renderBooks(books)

  return books
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
