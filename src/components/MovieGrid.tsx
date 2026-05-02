import type { Movie } from '../types/movie.ts';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onSelect(movie)}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Галерея фільмів MovieGrid
// Компонент MovieGrid – це список карток фільмів. Він приймає два пропси:
// onSelect – функцію для обробки кліку на картку фільму;
// movies – масив фільмів.
// Компонент MovieGrid має створювати DOM-елемент наступної структури:


// <ul className={css.grid}>
//   {/* Набір елементів списку з фільмами */}
//   <li>
//     <div className={css.card}>
//       <img 
// 		    className={css.image} 
// 		    src="https://image.tmdb.org/t/p/w500/poster-path" 
// 		    alt="movie title" 
// 		    loading="lazy" 
// 		  />
// 	    <h2 className={css.title}>Movie title</h2>
//     </div>
//   </li>
// </ul>


// Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені фільми.
// Індикатор завантаження Loader
// Компонент Loader має відображатись замість галереї поки відбувається запит за фільмами та створювати DOM-елемент наступної структури:

// <p className={css.text}>Loading movies, please wait...</p>