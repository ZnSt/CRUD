const BASE_URL = 'http://localhost:7777';
function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(response => response.json())
    .then(data => console.log(data));
}

removeBook(18);
removeBook(16);
