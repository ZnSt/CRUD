const BASE_URL = 'http://localhost:7777';
const options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Большая новая тестовая книга по HTML' }),
};

function updateParams() {
  return fetch(`${BASE_URL}/books/13`, options)
    .then(response => response.json())
    .then(data => console.log(data));
}

updateParams(options);
