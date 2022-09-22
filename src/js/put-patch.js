const BASE_URL = 'http://localhost:7777';

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(response => response.json())
    .then(data => console.log(data));
}
updateBookById({ title: 'Большая новая тестовая книга по HTML' }, 14);
updateBookById({ rating: 55 }, 13);
updateBookById({ author: 'Репета Сашка', rating: 100 }, 12);
