import { API_URL } from '../constants';

async function fetchAllArticles() {
  const response = await fetch(`${API_URL}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

async function fetchArticle(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export { fetchAllArticles, fetchArticle };