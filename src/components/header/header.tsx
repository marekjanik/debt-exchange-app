import { FC } from 'react';

import styles from './header.module.scss';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return <header className={styles.header}></header>;
};
