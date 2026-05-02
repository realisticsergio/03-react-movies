import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleAction = (formData: FormData) => {
    const query = formData.get('query') as string;

    if (query.trim() === "") {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query.trim());
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form} action={handleAction}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

//Хедер з формою пошуку SearchBar
//Компонент SearchBar приймає один пропс onSubmit – функцію для передачі значення інпуту під час сабміту форми.
//Компонент SearchBar має створювати DOM-елемент наступної структури:

//<header className={styles.header}>
//  <div className={styles.container}>
 //   <a
//      className={styles.link}
//      href="https://www.themoviedb.org/"
//      target="_blank"
//      rel="noopener noreferrer"
 //   >
 //     Powered by TMDB
//    </a>
 //   <form className={styles.form}>
//      <input
//        className={styles.input}
//        type="text"
//        name="query"
//        autoComplete="off"
//        placeholder="Search movies..."
//        autoFocus
//      />
//      <button className={styles.button} type="submit">
//        Search
//      </button>
//    </form>
//  </div>
//</header>


//Обробка форми має бути реалізована через Form Actions.
//Якщо під час натискання кнопки відправки форми текстове поле порожнє, покажіть користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень.
//Please enter your search query.
//Ця перевірка виконується в SearchBar в момент відправки форми. Для сповіщень використовуйте бібліотеку React Hot Toast.
//Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:
//No movies found for your request.
//Ця перевірка виконується в App при обробці HTTP-запиту. Для сповіщень використовуйте бібліотеку React Hot Toast.
//При кожному новому пошуку колекція фільмів з попереднього пошуку повинна очищатись.