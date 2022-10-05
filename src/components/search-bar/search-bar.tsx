import { FC } from 'react';

import styles from './search-bar.module.scss';

export const SearchBar: FC = () => {
  return (
    <form className={styles.search} role="search" action="/" method="get">
      <label className={styles.search__label} htmlFor="search">
        Podaj NIP lub nazwę dłużnika
      </label>

      <input className={styles.search__input} type="text" id="search" />

      <button className={styles.search__button} type="submit">
        Szukaj
      </button>
    </form>
  );
};
