import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './debt-table-cell.module.scss';

type DebtTableCellProps = {
  type: 'head' | 'body';
  children: ReactNode;
};

export const DebtTableCell: FC<DebtTableCellProps> = ({ type, children }) => {
  return (
    <th
      className={clsx(styles.cell, {
        [styles['cell--head']]: type === 'head',
        [styles['cell--body']]: type === 'body',
      })}
    >
      {children}
    </th>
  );
};
