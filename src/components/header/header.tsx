import { FC } from 'react';

import { SearchBar } from '../search-bar';

import styles from './header.module.scss';

type HeaderProps = {
  onSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
};

export const Header: FC<HeaderProps> = ({ onSearchPhrase }) => {
  return (
    <header className={styles.header}>
      <SearchBar onSearchPhrase={onSearchPhrase} />
    </header>
  );
};
