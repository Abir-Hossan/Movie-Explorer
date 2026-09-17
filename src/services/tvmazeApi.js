const BASE_URL = 'https://api.tvmaze.com';

async function request(path, signal) {
  const response = await fetch(`${BASE_URL}${path}`, { signal });
  if (!response.ok) throw new Error(`TVMaze request failed (${response.status})`);
  return response.json();
}

export const getAllShows = (signal) => request('/shows', signal);

export const searchShows = async (query, signal) => {
  const data = await request(`/search/shows?q=${encodeURIComponent(query)}`, signal);
  return data.map((item) => item.show);
};
