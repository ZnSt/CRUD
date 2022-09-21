const BASE_URL = 'http://localhost:7777';
function fetchBooks() {
  return fetch(`${BASE_URL}/books`)
    .then(response => response.json())
    .then(data => console.log(data));
}

fetchBooks();

function fetchBooksById(id) {
  return fetch(`${BASE_URL}/books/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

fetchBooksById(1);
