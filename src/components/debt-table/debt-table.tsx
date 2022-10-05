import { FC } from 'react';
import clsx from 'clsx';

import styles from './debt-table.module.scss';

export const DebtTable: FC = () => {
  return (
    <table className={styles.table}>
      <tr className={styles.table__row}>
        <th className={clsx(styles.table__cell, styles.table__th)}>Dłużnik</th>
        <th className={clsx(styles.table__cell, styles.table__th)}>NIP</th>
        <th className={clsx(styles.table__cell, styles.table__th)}>
          Kwota zadłużenia
        </th>
        <th className={clsx(styles.table__cell, styles.table__th)}>
          Data powstania zobowiązania
        </th>
      </tr>
      <tr className={styles.table__row}>
        <td className={clsx(styles.table__cell, styles.table__td)}>[Name]</td>
        <td className={clsx(styles.table__cell, styles.table__td)}>[NIP]</td>
        <td className={clsx(styles.table__cell, styles.table__td)}>[Value]</td>
        <td className={clsx(styles.table__cell, styles.table__td)}>[Date]</td>
      </tr>
    </table>
  );
};
