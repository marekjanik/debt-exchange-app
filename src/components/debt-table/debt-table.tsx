import { FC } from 'react';
import clsx from 'clsx';

import { TableHeaderCells } from '../../common';

import styles from './debt-table.module.scss';

export const DebtTable: FC = () => {
  const { name, nip, value, date } = TableHeaderCells;

  return (
    <table className={styles.table}>
      <thead className={styles.table__section}>
        <tr className={styles.table__row}>
          <th
            className={clsx(
              styles.table__cell,
              styles.table__th,
              styles.table__th__name
            )}
          >
            {name}
          </th>
          <th
            className={clsx(
              styles.table__cell,
              styles.table__th,
              styles.table__th__nip
            )}
          >
            {nip}
          </th>
          <th
            className={clsx(
              styles.table__cell,
              styles.table__th,
              styles.table__th__value
            )}
          >
            {value}
          </th>
          <th
            className={clsx(
              styles.table__cell,
              styles.table__th,
              styles.table__th__date
            )}
          >
            {date}
          </th>
        </tr>
      </thead>
      <tbody className={styles.table__section}>
        <tr className={styles.table__row}>
          <td
            className={clsx(
              styles.table__cell,
              styles.table__td,
              styles.table__td__name
            )}
          >
            [Name]
          </td>
          <td
            className={clsx(
              styles.table__cell,
              styles.table__td,
              styles.table__td__nip
            )}
          >
            [NIP]
          </td>
          <td
            className={clsx(
              styles.table__cell,
              styles.table__td,
              styles.table__td__value
            )}
          >
            [Value]
          </td>
          <td
            className={clsx(
              styles.table__cell,
              styles.table__td,
              styles.table__td__date
            )}
          >
            [Date]
          </td>
        </tr>
      </tbody>
    </table>
  );
};
