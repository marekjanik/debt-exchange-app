import { FC } from 'react';

import { ColumnType, DebtType, formatData } from '../../../common';

import styles from './table-body.module.scss';

type TableBodyProps = {
  data: DebtType[];
  columns: ColumnType[];
};

export const TableBody: FC<TableBodyProps> = ({ data, columns }) => {
  return (
    <tbody className={styles['table-body']}>
      {data.map((data) => {
        return (
          <tr className={styles['table-body__row']} key={data.Id}>
            {columns.map(({ accessor, label }) => {
              const tableData = data[accessor as keyof DebtType]
                ? data[accessor as keyof DebtType]
                : '——';
              return (
                <td
                  className={styles['table-body__cell']}
                  key={accessor}
                  data-label={label}
                >
                  {formatData(accessor, tableData)}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
