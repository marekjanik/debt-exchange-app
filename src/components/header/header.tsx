import { FC } from 'react';

import { SearchBar } from '../search-bar';

import styles from './header.module.scss';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <SearchBar />
    </header>
  );
};
