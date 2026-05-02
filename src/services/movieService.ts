import axios from "axios";
import { Movie } from '../types/movie';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Beaarer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
});

interface TMDVResponse {
    results: Movie[];
    total_reasulta: number;
}

export default function fetchMovies(query, string): Promise<Movie[]> => {
    const response = await instance.get<TMDVResponse>('/src/types/movie', {
        params: { query, language: 'en_US' },
    });
    return response.data.results;
};
