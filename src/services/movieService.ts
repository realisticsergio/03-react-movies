import axios from 'axios';
import type { Movie } from '../types/movie';

const instance = axios.create({
  baseURL: '[https://api.themoviedb.org/3](https://api.themoviedb.org/3)',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

interface TMDBResponse {
  results: Movie[];
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await instance.get<TMDBResponse>('/search/movie', {
    params: { query, language: 'en-US' },
  });
  return response.data.results;
};