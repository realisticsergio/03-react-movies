import css from '../MovieModal/MovieModal.module.css';
import type { Movie } from '../../types/movie.ts';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
  movie: Movie;
}

export default function Modal({ movie, onClose }: ModalProps) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose} aria-label="Close modal">
          &times;</button>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className={css.image}
        />
        <div className={css.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}/10</p>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}




// {/* <div className={css.backdrop} role="dialog" aria-modal="true">
//   <div className={css.modal}>
//     <button className={css.closeButton} aria-label="Close modal">
//       &times;
//     </button>
//     <img
//       src="https://image.tmdb.org/t/p/original/backdrop_path"
//       alt="movie_title"
//       className={css.image}
//     />
//     <div className={css.content}>
//       <h2>movie_title</h2>
//       <p>movie_overview</p>
//       <p>
//         <strong>Release Date:</strong> movie_release_date
//       </p>
//       <p>
//         <strong>Rating:</strong> movie_vote_average/10
//       </p>
//     </div>
//   </div>
// </div> */}
