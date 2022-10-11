import { FC, useState } from 'react';

import styles from './search-bar.module.scss';

type SearchBarProps = {
  onSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar: FC<SearchBarProps> = ({ onSearchPhrase }) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onSearchPhrase(value);
    }
    setValue('');
  };

  return (
    <form onSubmit={onSubmit} className={styles.search} role="search">
      <label className={styles.search__label} htmlFor="search">
        Podaj NIP lub nazwę dłużnika
      </label>

      <input
        className={styles.search__input}
        value={value}
        onChange={onChange}
        minLength={3}
        type="search"
        id="search"
      />

      <button className={styles.search__button} type="submit">
        Szukaj
      </button>
    </form>
  );
};
