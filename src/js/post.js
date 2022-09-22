const BASE_URL = 'http://localhost:7777';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options)
    .then(response => response.json())
    .then(data => console.log(data));
}

// addBook({
//   title: 'Тестовая книга по CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 8,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 5,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по NODE.JS',
//   author: 'Alex',
//   genres: ['NODE.JS'],
//   rating: 15,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по REACT',
//   author: 'Monnley',
//   genres: ['REACT'],
//   rating: 25,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

function renderBook(book) {
  console.log('Пришел ответ от бекенда можно рисовать');
  return book;
}
