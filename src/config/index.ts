// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

// For single movie
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id?: string) =>
  `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  creditsUrl,
  IMAGE_BASE_URL,
  movieUrl,
  POPULAR_BASE_URL,
  POSTER_SIZE,
  SEARCH_BASE_URL,
};
