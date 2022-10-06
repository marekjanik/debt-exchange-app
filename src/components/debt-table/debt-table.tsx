import { FC } from 'react';

import { DebtTableCell } from './debt-table-cell';

import {
  TableHeaderCellsEnum,
  DebtType,
  formatName,
  formatValue,
  formatDate,
} from '../../common';

import styles from './debt-table.module.scss';

type DebtTableProps = {
  debts: DebtType[];
};

export const DebtTable: FC<DebtTableProps> = ({ debts }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__section}>
        <tr className={styles.table__row}>
          {Object.values(TableHeaderCellsEnum).map((cell) => (
            <DebtTableCell key={cell} type="head">
              {cell}
            </DebtTableCell>
          ))}
        </tr>
      </thead>
      <tbody className={styles.table__section}>
        {debts.map(({ Id, Name, NIP, Value, Date }) => (
          <tr key={Id} className={styles.table__row}>
            <DebtTableCell type="body">{formatName(Name)}</DebtTableCell>
            <DebtTableCell type="body">{NIP}</DebtTableCell>
            <DebtTableCell type="body">{formatValue(Value)}</DebtTableCell>
            <DebtTableCell type="body">{formatDate(Date)}</DebtTableCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
