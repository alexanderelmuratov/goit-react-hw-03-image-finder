const API_KEY = '24423897-12eb64b2c015c5a46d7d8ecad';
const BASE_URL = 'https://pixabay.com';

export const fetchData = (query, page, perPage) => {
  return fetch(
    `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};
